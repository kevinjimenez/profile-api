import { BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class AuditEntity extends BaseEntity {
  @CreateDateColumn({
    select: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @UpdateDateColumn({
    select: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  upateAt: Date;
}
