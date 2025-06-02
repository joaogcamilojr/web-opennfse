# Mock Requests

Esta pasta simula o armazenamento local dos dados do formulário de solicitação de cidades.

Em um ambiente de produção, estes dados seriam enviados para um banco de dados real através de uma API.

## Estrutura dos dados

Cada solicitação é salva com a seguinte estrutura:

\`\`\`json
{
  "id": "req_1234567890",
  "full_name": "Nome do Solicitante",
  "email": "email@exemplo.com",
  "city_name": "Nome da Cidade",
  "state": "SP",
  "cnpj": "00.000.000/0000-00",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
\`\`\`

## Campos obrigatórios

- `full_name`: Nome completo do solicitante
- `email`: Email para contato
- `city_name`: Nome da cidade solicitada
- `state`: Estado (UF) da cidade

## Campos opcionais

- `cnpj`: CNPJ da empresa (quando aplicável)
