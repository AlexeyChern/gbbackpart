from django.shortcuts import render
import os
def test_vue(request):
    print(request)
    print(os.listdir())
    return render(request, 'dist/index.html')