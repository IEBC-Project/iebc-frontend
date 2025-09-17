Documentação do Projeto: App de Igreja
1. Visão Geral do Projeto
O objetivo do projeto é desenvolver um aplicativo mobile para igrejas que centraliza a comunicação, a organização de eventos, o gerenciamento de membros, as doações e o consumo de conteúdo digital. A aplicação utiliza uma stack tecnológica moderna, escalável e com notificações em tempo real.

1.1 Stack Tecnológica

Frontend Mobile: React Native + Expo.


Backend: NestJS (Node.js / TypeScript).


Banco de Dados: PostgreSQL.


Mensageria: RabbitMQ.


Notificações Push: Firebase Cloud Messaging (FCM).


Containerização: Docker + Docker Compose.


Integrações Externas: YouTube API, Firebase SDK.


Autenticação: JWT (JSON Web Tokens).

2. Funcionalidades Principais
2.1 Cadastro e Autenticação

Login e Cadastro: Sistema de autenticação via e-mail e senha.


Perfil do Usuário: Gerenciamento de informações pessoais como nome, telefone e ministério.


Segurança: Uso de tokens JWT para autenticação segura.

2.2 Eventos e Agenda

Listagem de Eventos: Visualização de próximos cultos, ensaios e eventos especiais.


Sistema de Inscrições: Registro em eventos com controle de limite de vagas.


Notificações Automáticas: Push notifications via Firebase quando novos eventos são criados.


Processamento Assíncrono: O backend utiliza RabbitMQ para escalar o envio de notificações.

2.3 Pedidos de Oração

Envio de Pedidos: Interface para membros enviarem solicitações de oração.


Gestão Pastoral: A equipe pastoral recebe e processa os pedidos automaticamente.


Persistência: Todos os pedidos são armazenados no PostgreSQL.

2.4 Sistema de Doações

Doações Online: Suporte para PIX e cartão de crédito.


Processamento Assíncrono: Transações processadas via filas RabbitMQ.


Confirmações: Usuários recebem notificações push confirmando as doações.

2.5 Mídia e Conteúdo Digital

Lives dos Cultos: Exibição de lives com integração com o YouTube.


Galeria de Fotos: Upload de mídias e organização por evento.


Posts e Avisos Internos: Feed de notícias e conteúdo pastoral.

3. Requisitos Não Funcionais
3.1 Escalabilidade

Processamento Assíncrono: RabbitMQ para operações que não precisam de resposta imediata.


Microserviços: Arquitetura preparada para crescimento horizontal.

3.2 Persistência e Dados

Banco Principal: PostgreSQL para dados transacionais com um modelo relacional e estrutura normalizada.


Backup e Recuperação: Estratégias de backup automático.

3.3 Segurança

Criptografia de Senhas: bcrypt para hash seguro.


Comunicação Segura: HTTPS obrigatório em todas as comunicações.


Controle de Acesso: Sistema baseado em roles e permissões.

3.4 Infraestrutura e Disponibilidade

Containerização: Docker Compose para orquestração de serviços.


Alta Disponibilidade: Arquitetura resiliente a falhas.


Monitoramento: Logs estruturados e health checks contínuos.


4. Especificações Técnicas
4.1 Frontend (React Native)

Framework: Expo para desenvolvimento rápido.


Navegação: React Navigation.


Estado Global: Redux Toolkit para gerenciamento de estado.


Comunicação API: Axios para consumo da API REST.

4.2 Backend (NestJS)

API RESTful: Controllers e DTOs (Data Transfer Objects) com documentação automática via Swagger.



ORM: Prisma para interação com o PostgreSQL.


Microserviços: @nestjs/microservices para integração nativa com RabbitMQ.


Autenticação: @nestjs/passport e @nestjs/jwt.

4.3 Banco de Dados (PostgreSQL)

Modelo: Estrutura relacional normalizada e otimizada.


Migrations: Versionamento do schema do banco com Prisma Migrate.

4.4 Mensageria (RabbitMQ)

Estrutura: Exchanges e Filas organizadas por domínio.


Durabilidade: Mensagens persistidas para garantir a entrega.


Tratamento de Falhas: Dead Letter Queues para mensagens com falha.
