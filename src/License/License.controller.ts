import { Body, Delete, Get, JsonController, Param, Post, Put } from 'routing-controllers';
import { Transaction } from 'typeorm';
import { LicenseResponse } from './LicenseResponse';
import { LicenseRequest } from './License.request';
import { Inject, Service } from 'typedi';
import { LicenseService } from './License.service';

@Service()
@JsonController('/licenses')
export class LicenseController {
  @Inject()
  private readonly licenseService: LicenseService;

  @Get()
  public async index(): Promise<LicenseResponse> {
    return await this.licenseService.findAllAndRespond();
  }

  @Get('/:id')
  public async show(@Param('id') id: string): Promise<LicenseResponse> {
    return await this.licenseService.findByIdAndRespond(id);
  }

  @Post()
  @Transaction()
  public async store(@Body() licenseRequest: LicenseRequest): Promise<LicenseResponse> {
    return await this.licenseService.create(licenseRequest);
  }

  @Put('/:id')
  @Transaction()
  public async update(
    @Param('id') id: string,
    @Body() licenseRequest: LicenseRequest
  ): Promise<LicenseResponse> {
    return await this.licenseService.update(id, licenseRequest);
  }

  @Delete('/:id')
  @Transaction()
  public async destroy(@Param('id') id: string): Promise<LicenseResponse> {
    return await this.licenseService.deleteByIdAndRespond(id);
  }
}
