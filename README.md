# 1.1 Como funciona

O projeto funciona criando duas imagens através do uso de um Docker Compose. Uma das imagens é usada para hospedar o back-end e uma para hospedar o front-end, tal qual faz uso do back-end para gerar suas respostas.

Depois de executar o projeto (ver 1.3) você pode executá-lo de duas maneiras:

- Você pode utilizar o projeto sem o uso de uma interface gráfica acessando o webservice através do http://localhost:8000/soma?num1=1&num2=2 (altere os valores de num1 e num2 para testar a funcionalidade).

- Você também pode utilizar o projeto através de uma interface gráfica acessando o webservice através de outra porta http://localhost:3000/.

O projeto também conta com um script de testes unitários para assegurar as funcionalidades básicas do programa. Uma vez que o programa esteja em execução (ver 1.3) o arquivo de testes pode ser executado utilizando o seguinte comando:

```bash
python3 unitary_tests.py
```

# 1.2 Requisitos

Para rodar o projeto você precisa ter o Docker instalado em sua máquina, o que pode ser feito seguindo o passo a passo mostrado no site oficial de acordo com o seu sistema operacional: https://docs.docker.com/engine/install/

# 1.3 Como executar

Você pode executar o programa você pode rodar o seguinte comando no seu terminal dentro da pasta raiz do projeto:

```bash
sudo docker compose up --build
```

Obs: Na primeira vez em que rodar o comando ele pode levar alguns minutos para terminar de buildar.