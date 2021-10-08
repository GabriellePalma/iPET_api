import { userInfo } from 'os';
import { Usuario } from 'src/usuario/usuario.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Servico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  titulo: string;

  @Column({length: 255})
  descricao: string;

  @Column({ length: 200 })
  cidade: string;

  @Column({ length: 200 })
  raca: string;

  @Column({ length: 200 })
  idade: string;

  @Column({ length: 200 })
  sexo: string;

  @ManyToOne(() => Usuario, usuario => usuario.servicos)
  usuario: Usuario

}