/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     10/10/2022 10:44:43 p. m.                    */
/*==============================================================*/


/*==============================================================*/
/* Table: CARRITO                                               */
/*==============================================================*/
create table CARRITO
(
   IDCOMPRA             biginit not null  comment '',
   IDUSUARIO            bigint not null  comment '',
   IDPRODUCTO           biginit not null  comment '',
   FECHACOMPRA          date not null  comment '',
   HORACOMPRA           time not null  comment '',
   TOTALCOMPRA          bigint not null  comment '',
   CANTIDADCOMPRA       bigint not null  comment '',
   primary key (IDCOMPRA)
);

/*==============================================================*/
/* Table: CATEGORIAS                                            */
/*==============================================================*/
create table CATEGORIAS
(
   IDCATEGORIA          int(2) not null  comment '1-chicles
             2-chocolates
             3-galletas
             4-helados
             5-mermeladas
             6-gomitas
             ',
   NOMBRECATEGORIA      text not null  comment '1-chicles
             2-chocolates
             3-galletas
             4-helados
             5-mermeladas
             6-gomitas',
   CANTIDAD             bigint not null  comment '',
   primary key (IDCATEGORIA)
);

/*==============================================================*/
/* Table: PERFILES                                              */
/*==============================================================*/
create table PERFILES
(
   IDROL                bigint not null auto_increment  comment '',
   NOMBREROL            varchar(100) not null  comment '',
   ESTADOROL            int(2) not null  comment '',
   primary key (IDROL)
);

/*==============================================================*/
/* Table: PRODUCTOS                                             */
/*==============================================================*/
create table PRODUCTOS
(
   IDPRODUCTO           biginit not null  comment '',
   IDCATEGORIA          int(2) not null  comment '1-chicles
             2-chocolates
             3-galletas
             4-helados
             5-mermeladas
             6-gomitas
             ',
   IDPROVEEDOR          bigint not null  comment '',
   NOMBREPRODUCTO       varchar(200) not null  comment '',
   PRECIOPRODUCTO       bigint not null  comment '',
   CANTIDADPRODUCTO     bigint not null  comment '',
   DESCRIPCIONPRODUCTO  text not null  comment '',
   primary key (IDPRODUCTO)
);

/*==============================================================*/
/* Table: PROVEEDORES                                           */
/*==============================================================*/
create table PROVEEDORES
(
   IDPROVEEDOR          bigint not null  comment '',
   NOMBREPROVEEDOR      varchar(200) not null  comment '',
   DIRECCIONPROVEEDOR   text not null  comment '',
   TELEFONOPROVEEDOR    varchar(100) not null  comment '',
   CORREOPROVEEDOR      text not null  comment '',
   primary key (IDPROVEEDOR)
);

/*==============================================================*/
/* Table: USUARIOS                                              */
/*==============================================================*/
create table USUARIOS
(
   IDUSUARIO            bigint not null  comment '',
   NOMBREUSUARIO        text not null  comment '',
   DIRECCIONUSUARIO     text  comment '',
   TELEFONOUSUARIO      varchar(80) not null  comment '',
   primary key (IDUSUARIO)
);

/*==============================================================*/
/* Table: USUARIOSLOG                                           */
/*==============================================================*/
create table USUARIOSLOG
(
   IDUSULOG             bigint not null  comment '',
   IDROL                bigint not null  comment '',
   NOMBREUSULOG         cvarchar(200) not null  comment '',
   CELULARUSULOG        bigint not null  comment '',
   CORREUSULOG          varchar(200) not null  comment '',
   DIRECCIONUSULOG      text not null  comment '',
   USUARIOACCESO        varchar(200) not null  comment '',
   CLAVEACCESO          varchar(200) not null  comment '',
   primary key (IDUSULOG)
);

alter table CARRITO add constraint FK_CARRITO_REFERENCE_USUARIOS foreign key (IDUSUARIO)
      references USUARIOS (IDUSUARIO) on delete cascade on update cascade;

alter table CARRITO add constraint FK_CARRITO_REFERENCE_PRODUCTO foreign key (IDPRODUCTO)
      references PRODUCTOS (IDPRODUCTO) on delete restrict on update restrict;

alter table PRODUCTOS add constraint FK_PRODUCTO_REFERENCE_CATEGORI foreign key (IDCATEGORIA)
      references CATEGORIAS (IDCATEGORIA) on delete cascade on update cascade;

alter table PRODUCTOS add constraint FK_PRODUCTO_REFERENCE_PROVEEDO foreign key (IDPROVEEDOR)
      references PROVEEDORES (IDPROVEEDOR) on delete cascade on update cascade;

alter table USUARIOSLOG add constraint FK_USUARIOS_REFERENCE_PERFILES foreign key (IDROL)
      references PERFILES (IDROL) on delete cascade on update cascade;

