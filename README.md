#### Setup project .env

```sh
FWD_API=gogole.com
FWD_API_TOKEN=aa
PORT=6000
```

#### How to run

```bash
$ yarn dev
```

#### How to build

```bash
$ go build
```

#### How to test

```bash
$ yarn test
```

#### Folder Architecture

```sh
├── usecase
│   └── usecase1
│       └── usecase.ts
├── entities
│   └── entities1
│       ├── entities.ts
├── repository
│   └── repository1
│        ├── repository.ts
├── handler
│   └── handler1
│      └──hadler.ts
└── README.md
```

#### Layer


| Layer | Folder |
| ------ | ------ |
| Repository | repository |
| Model | entities |
| UseCase | usecase |
| Delivery | handlers |


### Feature

```sh
    calculateSumAssuredByPremium 
    calculatePremiumBySumassured
```

### API DOCUMENT
- [POSTMAN](https://github.com/oommi04/fwd-backend-test/blob/main/fwd-backend-test.postman_collection.json)
