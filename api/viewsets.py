
from .serializers import UserSerializer
from .models import FCITian
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework import filters

class UserViewSet(viewsets.ModelViewSet):
    https_method_name = ['get']
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['fmail']

    def get_queryset(self):
        if self.request.user.is_superuser:
            return FCITian.objects.all()
    
    def get_object(self):
        lookup_field_value = self.kwargs[self.lookup_field]

        obj = FCITian.objects.get(lookup_field_value)
        self.check_object_permissions(self.request, obj)