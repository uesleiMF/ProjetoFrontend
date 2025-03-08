const Api = {
  apiUrl: 'https://projeto-backend-fg78.onrender.com/produtos',

  // Requisição GET para todos os produtos
  fetchGetAll: () => fetch(Api.apiUrl),

  // Requisição GET para buscar produto por ID
  fetchGetById: (id) => fetch(`${Api.apiUrl}/${id}`),

  // Requisição POST para adicionar um novo produto (formato JSON)
  fetchPost: (data) => {
    return fetch(`${Api.apiUrl}/add`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }).then(response => response.json());
  },

  // Requisição PUT para editar produto existente
  fetchPut: (produto, id) => {
    return fetch(`${Api.apiUrl}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(produto),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }).then(response => response.json());
  },

  // Requisição DELETE para excluir um produto
  fetchDelete: (id) => {
    return fetch(`${Api.apiUrl}/${id}`, {
      method: 'DELETE'
    }).then(response => response.json());
  },

  // Requisição POST para upload de imagem (formato multipart/form-data)
  fetchPostImage: (formData) => {
    return fetch(`${Api.apiUrl}/upload`, {
      method: 'POST',
      body: formData
    }).then(response => response.json());
  }
}

export default Api;
