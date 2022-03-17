import json

from rest_framework.response import Response
from rest_framework.views import APIView
import asyncio
from nats.aio.client import Client as NATS
import os
from nats.aio.errors import ErrConnectionClosed, ErrTimeout, ErrNoServers

async def updatewellas(GbNum, datas):
    print("update well")
    nc = NATS()
    await nc.connect(getNatsServers()+":8056", connect_timeout=10000, reconnect_time_wait=2)
    await nc.publish("GetInfo", bytes("wellupdate." + str(GbNum) + "." + datas, 'utf-8'))
    future = asyncio.Future()
    res = ""

    async def cb(msg):
        nonlocal future
        future.set_result(msg)

    await nc.subscribe("gbox-" + str(GbNum) + ".respupwell", cb=cb)
    await nc.flush()
    try:
        msg = await asyncio.wait_for(future, 100000)
        res = msg
    except:
        print("ERROR GET NATS INFO")
        pass
    print(str(msg.data.decode()))
    return str(msg.data.decode())

async def createwellas(GbNum, datas):
    print("create well")
    nc = NATS()
    await nc.connect(getNatsServers()+":8056",connect_timeout=10000, reconnect_time_wait=2)
    await nc.publish("GetInfo", bytes("wellcreate." + str(GbNum)+"."+datas, 'utf-8'))
    future = asyncio.Future()
    res = ""

    async def cb(msg):
        nonlocal future
        future.set_result(msg)

    await nc.subscribe("gbox-" + str(GbNum) + ".respcrwell", cb=cb)
    await nc.flush()
    try:
        msg = await asyncio.wait_for(future, 100000)
        res = msg
    except:
        print("ERROR GET NATS INFO")
        pass
    print(str(msg.data.decode()))
    return str(msg.data.decode())

async def wellschemeget(GbNum):
    print("Get scheme")
    nc = NATS()
    await nc.connect(getNatsServers()+":8056",connect_timeout=10000, reconnect_time_wait=2)
    await nc.publish("GetInfo", bytes("wellschemeget."+str(GbNum), 'utf-8'))

    future = asyncio.Future()
    res = ""

    async def cb(msg):
        nonlocal future
        future.set_result(msg)

    await nc.subscribe("gbox-" + str(GbNum)+".respscheme", cb=cb)
    await nc.flush()
    try:
        msg = await asyncio.wait_for(future, 100000)
        res = msg
    except:
        print("ERROR GET NATS INFO")
        pass
    print(str(msg.data.decode()))
    return str(msg.data.decode())

async def wellkeget(GbNum):
    print("Get KEs")
    nc = NATS()
    await nc.connect(getNatsServers()+":8056", connect_timeout=10000, reconnect_time_wait=2)
    await nc.publish("GetInfo", bytes("wellkeget."+str(GbNum), 'utf-8'))

    future = asyncio.Future()
    res = ""

    async def cb(msg):
        nonlocal future
        future.set_result(msg)

    await nc.subscribe("gbox-" + str(GbNum), cb=cb)
    await nc.flush()
    try:
        msg = await asyncio.wait_for(future, 100000)
        res = msg
    except:
        print("ERROR GET NATS INFO")
        pass
    return str(msg.data.decode())

def getNatsServers():
    strtoget = r'grep host /home/ts/connect/config/Kernel/servers.conf'
    Natsserv = str(str(str(os.popen(strtoget).read()).split()[1]).split('=')[1].replace('\"',''))
    print("GOT NATS:", Natsserv)
    return Natsserv
def getGboxNum():
    strtoget = "grep product_key /home/ts/connect/connect.conf"
    prdata = (os.popen(strtoget).read())
    print("DATA from command:", prdata)
    prodKey = str(prdata.split('=')[1])
    print("GOT GBOX:", prodKey.split('-')[1])
    return int(prodKey.split('-')[1])


class test(APIView):
    def get(self, request):
        asyncio.run(wellkeget("11"))
        return Response("Nats knocking")


class startup(APIView):
    def get(self, request):
        # asyncio.run(puit(getGboxNum())) - раскомментить на боксе
        print("req sent")
        res = asyncio.run(wellkeget(getGboxNum()))
        return Response(json.loads(res))

class startupscheme(APIView):
    def get(self, request):
        # asyncio.run(puit(getGboxNum())) - раскомментить на боксе
        print("req sent scheme")
        res = asyncio.run(wellschemeget(getGboxNum()))
        return Response(json.loads(res))

class createwell(APIView):
    def post(self, request):
        print(type(request.data))
        res = asyncio.run(createwellas(getGboxNum(),json.dumps(request.data)))
        return Response(res)

class updatewell(APIView):
    def put(self, request):
        print(type(request.data))
        res = asyncio.run(updatewellas(getGboxNum(), json.dumps(request.data)))
        return Response(res)
class getPrevdata(APIView):
    def get(self, request):
        return Response()
