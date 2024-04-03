# pass.in

O pass.in é uma aplicação de gestão de participantes em eventos presenciais.

A ferramente permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes incritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan de credencial de participante para permitir a entrada do evento.

## Requisitos

### Requisitos funcionais

- [ ] O organizador deve poder cadastrar um novo evento;
- [ ] O organizador deve poder visualizar dados de um evento;
- [ ] O organizador deve poder visualizar a lista de participantes;
- [ ] O participante deve poder se inscrever em um evento;
- [ ] O participante deve poder visualizar seu crachá de inscrição.
- [ ] O participante deve poder realizar check-in no evento;

### Regras de negócio

- [ x ] O participante só pode se inscrever em um evento uma única vez;
- [ ] O participante só pode se inscrever em eventos com vagas disponíveis;
- [ ] O participante só pode realizar check-in uma única vez;

### Requisitos não-funcionais

- [ ] O check-in no evento será realizado através de um QRCode.