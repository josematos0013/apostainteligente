# Instruções para Editar o Link de Checkout

## Como Personalizar o Botão de Checkout

Para personalizar o link de checkout na sua página de vendas, siga estes passos simples:

### 1. Localize o arquivo HTML
Abra o arquivo `index.html` na pasta `sales_page`

### 2. Encontre o botão de checkout
Procure por esta linha no código:
```html
<a href="[LINK_DO_CHECKOUT_AQUI]" class="cta-button primary large" id="checkout-button">
```

### 3. Substitua o link
Troque `[LINK_DO_CHECKOUT_AQUI]` pelo seu link real de checkout.

**Exemplo:**
```html
<a href="https://pay.hotmart.com/seu-produto-aqui" class="cta-button primary large" id="checkout-button">
```

### 4. Salve o arquivo
Após fazer a alteração, salve o arquivo e sua página estará pronta!

## Observações Importantes

- Mantenha as aspas ao redor do link
- Certifique-se de que o link está completo (incluindo https://)
- Teste o link antes de colocar a página no ar
- O botão manterá todos os estilos e animações automaticamente

## Estrutura dos Arquivos

Sua página de vendas contém:
- `index.html` - Arquivo principal da página
- `styles.css` - Estilos e design responsivo
- `script.js` - Interações e animações

Todos os arquivos estão otimizados e prontos para uso!

