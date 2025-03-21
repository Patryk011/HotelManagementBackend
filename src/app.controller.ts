import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { Roles, RolesGuard } from './auth/guards/role.guard';

@Controller()
export class AppController {
  @Get('public')
  getPublic() {
    return { message: 'Public route' };
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getProtected() {
    return { message: 'Token is valid, no specific role' };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get('admin')
  getAdminOnlyData() {
    return {
      message: 'Admin only route. User must have realm_access.roles=["admin"].',
    };
  }
}
