import { PartialType } from '@nestjs/mapped-types';
import { UpdateUserDTO } from './update-put-user.dto';

export class UpdatePathUserDTO extends PartialType(UpdateUserDTO) {}
