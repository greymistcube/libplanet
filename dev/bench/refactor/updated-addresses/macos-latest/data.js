window.BENCHMARK_DATA = {
  "lastUpdate": 1699930548796,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "0e72cb326937cc8187ec97be38ce02d3030a35e5",
          "message": "Remove public updatedAddresses parameter from Transaction.Create()",
          "timestamp": "2023-11-03T17:48:20+09:00",
          "tree_id": "f5e73c27bae6c711624a26ac0ac99945fe783f9c",
          "url": "https://github.com/greymistcube/libplanet/commit/0e72cb326937cc8187ec97be38ce02d3030a35e5"
        },
        "date": 1699002394399,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8120652.766666667,
            "unit": "ns",
            "range": "± 131301.33033732895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19794098.64285714,
            "unit": "ns",
            "range": "± 350585.97600075376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49158767.86,
            "unit": "ns",
            "range": "± 1920631.0785133562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96558447.5,
            "unit": "ns",
            "range": "± 1465855.2172317884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199862669.25,
            "unit": "ns",
            "range": "± 1363133.468107422"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56924.032608695656,
            "unit": "ns",
            "range": "± 5991.069163696887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302263.38764044945,
            "unit": "ns",
            "range": "± 24030.445655856034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300245.5104166667,
            "unit": "ns",
            "range": "± 27730.416904640177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315340.41764705884,
            "unit": "ns",
            "range": "± 45872.02161583998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4441631.632653061,
            "unit": "ns",
            "range": "± 258084.67278038323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3794120.0421686745,
            "unit": "ns",
            "range": "± 202275.7963176973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17694.157894736843,
            "unit": "ns",
            "range": "± 2211.465410545251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98976.7258064516,
            "unit": "ns",
            "range": "± 9886.816884695534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114052.4010989011,
            "unit": "ns",
            "range": "± 17200.30780800477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114783.64367816092,
            "unit": "ns",
            "range": "± 13427.754387208097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8357.070707070707,
            "unit": "ns",
            "range": "± 1401.4218090161967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22528.11224489796,
            "unit": "ns",
            "range": "± 4993.9849461037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1612229.4948453608,
            "unit": "ns",
            "range": "± 218882.8814955483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2893220.25,
            "unit": "ns",
            "range": "± 184350.98146051195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2344127.525773196,
            "unit": "ns",
            "range": "± 181690.3258294804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10841942.820754716,
            "unit": "ns",
            "range": "± 451780.8769032315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3247740.7647058824,
            "unit": "ns",
            "range": "± 132091.7448684191"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3525087.7,
            "unit": "ns",
            "range": "± 79751.75055204613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4371270.090909091,
            "unit": "ns",
            "range": "± 204974.99240271142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4444454.212121212,
            "unit": "ns",
            "range": "± 348993.3123847958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15525337.40425532,
            "unit": "ns",
            "range": "± 1736080.2707709877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6249808.142427885,
            "unit": "ns",
            "range": "± 87174.70152712782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1845535.252734375,
            "unit": "ns",
            "range": "± 34081.98660336103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1156061.0561523438,
            "unit": "ns",
            "range": "± 44809.69073427338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2668648.637606534,
            "unit": "ns",
            "range": "± 64875.89311598376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 903985.9168419471,
            "unit": "ns",
            "range": "± 23972.38878302001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 790296.97820173,
            "unit": "ns",
            "range": "± 33823.26252197507"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "7c248d21166d26575b7d9f0aee1f847c19c708ca",
          "message": "Remove public updatedAddresses parameter from Transaction.Create()",
          "timestamp": "2023-11-03T17:51:30+09:00",
          "tree_id": "0b94b76b85071abe723cfd5e4c3bd6b1e16ee0ff",
          "url": "https://github.com/greymistcube/libplanet/commit/7c248d21166d26575b7d9f0aee1f847c19c708ca"
        },
        "date": 1699002754634,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7493005.461538462,
            "unit": "ns",
            "range": "± 40949.31800941131"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18705529.807692308,
            "unit": "ns",
            "range": "± 159749.13461861832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47844005.78947368,
            "unit": "ns",
            "range": "± 1052095.6851244608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114268475.43,
            "unit": "ns",
            "range": "± 11858793.407814728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236990119.01086956,
            "unit": "ns",
            "range": "± 30049107.493688807"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42183.1,
            "unit": "ns",
            "range": "± 9813.419404711385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247273.71649484537,
            "unit": "ns",
            "range": "± 27846.02134739764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320110.70930232556,
            "unit": "ns",
            "range": "± 42596.01790560358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219527.5918367347,
            "unit": "ns",
            "range": "± 34165.54280434002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4145282.1868686867,
            "unit": "ns",
            "range": "± 464102.9404283029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3871184.8608247424,
            "unit": "ns",
            "range": "± 442809.1266315917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17447.736842105263,
            "unit": "ns",
            "range": "± 4215.3538586239065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69732.6105263158,
            "unit": "ns",
            "range": "± 5972.2337445789935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87899.78947368421,
            "unit": "ns",
            "range": "± 12599.037429371203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84530.85106382979,
            "unit": "ns",
            "range": "± 14221.843099221345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5742.770833333333,
            "unit": "ns",
            "range": "± 1297.6504231163472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18040.114942528737,
            "unit": "ns",
            "range": "± 4200.156684301325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1384664.5322580645,
            "unit": "ns",
            "range": "± 115714.54954076803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2413727.112244898,
            "unit": "ns",
            "range": "± 223007.4901670245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1680792.01010101,
            "unit": "ns",
            "range": "± 132421.74001801162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8104247.047619048,
            "unit": "ns",
            "range": "± 817872.7096176168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3185405.0808080807,
            "unit": "ns",
            "range": "± 279042.82677953906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3498913.36,
            "unit": "ns",
            "range": "± 459265.4441556377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4077916.9175257734,
            "unit": "ns",
            "range": "± 599346.3882474508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3874873.673469388,
            "unit": "ns",
            "range": "± 411347.5663989903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12561013.423913043,
            "unit": "ns",
            "range": "± 2143691.3322305316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7237945.106933594,
            "unit": "ns",
            "range": "± 1034137.9281768097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2032351.8891877949,
            "unit": "ns",
            "range": "± 79374.57374071567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1289158.7655691963,
            "unit": "ns",
            "range": "± 62670.02104598352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2942301.5517676766,
            "unit": "ns",
            "range": "± 244142.01352654485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 717707.7262454343,
            "unit": "ns",
            "range": "± 36655.512003055956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 649812.2780362216,
            "unit": "ns",
            "range": "± 27243.162983258582"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "5ff19af73580788ad4e9bb51d63a23bfeb637802",
          "message": "Changelog",
          "timestamp": "2023-11-03T17:55:04+09:00",
          "tree_id": "d12bb875589ed67deba30e725361ffe6eaa7e75c",
          "url": "https://github.com/greymistcube/libplanet/commit/5ff19af73580788ad4e9bb51d63a23bfeb637802"
        },
        "date": 1699002894304,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8652340.045454545,
            "unit": "ns",
            "range": "± 210790.09259167605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21772046.944444444,
            "unit": "ns",
            "range": "± 821932.4720346434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53736761.19387755,
            "unit": "ns",
            "range": "± 3398370.4639430144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105449200.45,
            "unit": "ns",
            "range": "± 2099806.103405878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223419910.9489796,
            "unit": "ns",
            "range": "± 13893207.912321752"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63852.49484536082,
            "unit": "ns",
            "range": "± 27216.00345121862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 245254.81578947368,
            "unit": "ns",
            "range": "± 25037.654471438233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233278.5744680851,
            "unit": "ns",
            "range": "± 20072.24016165854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233752.33516483515,
            "unit": "ns",
            "range": "± 18225.809349054514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4119671.6391752576,
            "unit": "ns",
            "range": "± 249997.71059902498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3890916.569892473,
            "unit": "ns",
            "range": "± 215660.89785921652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14856.061855670103,
            "unit": "ns",
            "range": "± 2571.2628496455495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68900.56382978724,
            "unit": "ns",
            "range": "± 9226.188967944785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59495.920454545456,
            "unit": "ns",
            "range": "± 6172.4828416433365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75141.33333333333,
            "unit": "ns",
            "range": "± 12484.906488840343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4435.833333333333,
            "unit": "ns",
            "range": "± 955.7729855985677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14349.434782608696,
            "unit": "ns",
            "range": "± 1741.8158221629851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1219845.4393939395,
            "unit": "ns",
            "range": "± 133668.13409235195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2709235.2441860465,
            "unit": "ns",
            "range": "± 254681.75044395795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1922979.8655913977,
            "unit": "ns",
            "range": "± 214960.11008040057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8497181.390243903,
            "unit": "ns",
            "range": "± 764429.8658511156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3258015.2083333335,
            "unit": "ns",
            "range": "± 272692.0114886859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3388039.649484536,
            "unit": "ns",
            "range": "± 266330.7382315831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4115001.3636363638,
            "unit": "ns",
            "range": "± 343170.1192717823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3982390.0164835164,
            "unit": "ns",
            "range": "± 327948.11690036725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12474102.234042553,
            "unit": "ns",
            "range": "± 1726061.3502242141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5198539.968664148,
            "unit": "ns",
            "range": "± 290049.80228524865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1529566.4750147406,
            "unit": "ns",
            "range": "± 63148.16414275908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1003225.7720588235,
            "unit": "ns",
            "range": "± 32366.390647795906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2252771.267862216,
            "unit": "ns",
            "range": "± 95130.85145562445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 712649.820907965,
            "unit": "ns",
            "range": "± 23386.412395865555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 625652.9278353987,
            "unit": "ns",
            "range": "± 27339.267405094684"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "2850e75da3082f6811ef47634342ac38f72f04ca",
          "message": "Changelog",
          "timestamp": "2023-11-07T14:01:09+09:00",
          "tree_id": "5142e2927802dea256b965da5710b9b9886b60e6",
          "url": "https://github.com/greymistcube/libplanet/commit/2850e75da3082f6811ef47634342ac38f72f04ca"
        },
        "date": 1699334670971,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 13372597.6185567,
            "unit": "ns",
            "range": "± 3045709.7574602943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26333167.347826086,
            "unit": "ns",
            "range": "± 594331.8375111063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69313691.43814433,
            "unit": "ns",
            "range": "± 5165617.10859485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141123976.3901099,
            "unit": "ns",
            "range": "± 8010330.6963145295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 293377359.1966292,
            "unit": "ns",
            "range": "± 19477987.718111735"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72064.43333333333,
            "unit": "ns",
            "range": "± 16958.658392485937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340934.0348837209,
            "unit": "ns",
            "range": "± 32533.63626028323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 384633.59574468085,
            "unit": "ns",
            "range": "± 98420.40787565397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302528.7804878049,
            "unit": "ns",
            "range": "± 23286.723458103388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4928484.8369565215,
            "unit": "ns",
            "range": "± 339647.4231146847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4490945.236842105,
            "unit": "ns",
            "range": "± 327186.1940792556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22250.23404255319,
            "unit": "ns",
            "range": "± 5828.280995166035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104588.68279569893,
            "unit": "ns",
            "range": "± 16956.992421972453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93419.58695652174,
            "unit": "ns",
            "range": "± 14006.41133309728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94334.36021505376,
            "unit": "ns",
            "range": "± 13301.28597950246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7727.875,
            "unit": "ns",
            "range": "± 2274.6201545243594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20926.145161290322,
            "unit": "ns",
            "range": "± 4622.628112470131"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2004462.8978494625,
            "unit": "ns",
            "range": "± 609302.3472212715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3908727.5057471264,
            "unit": "ns",
            "range": "± 1049266.49778071"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2616920.1333333333,
            "unit": "ns",
            "range": "± 594696.4669722386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12060013.452941176,
            "unit": "ns",
            "range": "± 1874880.8520439554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4127066.5361445784,
            "unit": "ns",
            "range": "± 193201.71565462076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4225872.989130435,
            "unit": "ns",
            "range": "± 264030.390864156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5137631.079545454,
            "unit": "ns",
            "range": "± 340704.4323567648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4880083.619565218,
            "unit": "ns",
            "range": "± 303057.34070046234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16077224.096774194,
            "unit": "ns",
            "range": "± 3722765.6696214504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5638199.86546875,
            "unit": "ns",
            "range": "± 567162.6489220093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1821436.605360243,
            "unit": "ns",
            "range": "± 38217.880475403195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1186637.4911943856,
            "unit": "ns",
            "range": "± 52340.45525850594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2673916.1015200405,
            "unit": "ns",
            "range": "± 230591.19478549235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 862665.9182441907,
            "unit": "ns",
            "range": "± 41526.65672936425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738376.4352463942,
            "unit": "ns",
            "range": "± 12163.509094906947"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "798ce5a532622090373c406e1d0687e86988d997",
          "message": "Changelog",
          "timestamp": "2023-11-13T23:57:24+09:00",
          "tree_id": "b072baa6cae459b35c939eea5ba681ae8eb907f9",
          "url": "https://github.com/greymistcube/libplanet/commit/798ce5a532622090373c406e1d0687e86988d997"
        },
        "date": 1699888905781,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7911891.445945946,
            "unit": "ns",
            "range": "± 395703.2938053994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21102424.844444446,
            "unit": "ns",
            "range": "± 2215458.4698366085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52094305.972527474,
            "unit": "ns",
            "range": "± 4955934.332618289"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127679708.53225806,
            "unit": "ns",
            "range": "± 17721603.07277548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 264765002.0326087,
            "unit": "ns",
            "range": "± 35890378.38852963"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56262.117647058825,
            "unit": "ns",
            "range": "± 10056.722403934788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328372.90721649484,
            "unit": "ns",
            "range": "± 77233.13572501368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290526.8010752688,
            "unit": "ns",
            "range": "± 63130.202850035486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269816.43258426967,
            "unit": "ns",
            "range": "± 41536.862221404604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4883958.171717172,
            "unit": "ns",
            "range": "± 970905.9617635378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4751936.384210526,
            "unit": "ns",
            "range": "± 1121971.5407757545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23144.101123595505,
            "unit": "ns",
            "range": "± 4676.480791356953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109440.87,
            "unit": "ns",
            "range": "± 23716.44579025962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106018.56382978724,
            "unit": "ns",
            "range": "± 20811.066621664682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101891.29032258065,
            "unit": "ns",
            "range": "± 25676.1688979001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7839.455555555555,
            "unit": "ns",
            "range": "± 1505.094772193232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24308.467741935485,
            "unit": "ns",
            "range": "± 5601.16791092174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1486479.317204301,
            "unit": "ns",
            "range": "± 425239.901742277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3596780.87628866,
            "unit": "ns",
            "range": "± 1481905.1383699903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2061330.170212766,
            "unit": "ns",
            "range": "± 383074.11029852036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10028667.229166666,
            "unit": "ns",
            "range": "± 2395979.410402345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3461606.227272727,
            "unit": "ns",
            "range": "± 518652.24950665695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3043913.4213483147,
            "unit": "ns",
            "range": "± 189201.02044934456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4139125.9444444445,
            "unit": "ns",
            "range": "± 490712.4580715134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4536736.617021277,
            "unit": "ns",
            "range": "± 825311.8283778889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16682348.463157894,
            "unit": "ns",
            "range": "± 5223373.560592117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6081055.008148521,
            "unit": "ns",
            "range": "± 574460.7459759756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1554841.4275072673,
            "unit": "ns",
            "range": "± 133163.62208752983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 924198.3498535156,
            "unit": "ns",
            "range": "± 34470.27596911659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2568559.334551411,
            "unit": "ns",
            "range": "± 338232.5259352145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 658415.3515345982,
            "unit": "ns",
            "range": "± 19453.24714521944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 608511.726969401,
            "unit": "ns",
            "range": "± 45168.32783986362"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "7fd73275a52ea6d4676a16f72c6011bd80ed9b05",
          "message": "Changelog",
          "timestamp": "2023-11-14T11:36:54+09:00",
          "tree_id": "5b0805250ca7bc9038df196c115713b35ae40f22",
          "url": "https://github.com/greymistcube/libplanet/commit/7fd73275a52ea6d4676a16f72c6011bd80ed9b05"
        },
        "date": 1699930534998,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8610306.25,
            "unit": "ns",
            "range": "± 267148.729647955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20990499,
            "unit": "ns",
            "range": "± 593067.0221899851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55049205.428571425,
            "unit": "ns",
            "range": "± 1685071.7330533874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109810185.37037037,
            "unit": "ns",
            "range": "± 4590527.387179012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214434913.1756757,
            "unit": "ns",
            "range": "± 7185684.157062523"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70427.15934065935,
            "unit": "ns",
            "range": "± 8173.3256664180735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293910.36842105264,
            "unit": "ns",
            "range": "± 22028.079498315292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297102.2244897959,
            "unit": "ns",
            "range": "± 25835.185336508915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291728.3020833333,
            "unit": "ns",
            "range": "± 19116.95147196512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3948245.3571428573,
            "unit": "ns",
            "range": "± 64385.7198878604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3735604.9,
            "unit": "ns",
            "range": "± 50825.28730408572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23758.597826086956,
            "unit": "ns",
            "range": "± 4736.654362602834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87074.57291666667,
            "unit": "ns",
            "range": "± 11748.345001694397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78700.42708333333,
            "unit": "ns",
            "range": "± 12987.933686184746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114298.2741935484,
            "unit": "ns",
            "range": "± 18548.632254819873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7651.489010989011,
            "unit": "ns",
            "range": "± 1064.2677868375617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24648.08695652174,
            "unit": "ns",
            "range": "± 4297.132232190079"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1470700.6262626264,
            "unit": "ns",
            "range": "± 140471.66835079895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2823789.7974683545,
            "unit": "ns",
            "range": "± 146312.70306386895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2277539.90625,
            "unit": "ns",
            "range": "± 214297.12980771044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10027614.59375,
            "unit": "ns",
            "range": "± 464773.84479908535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3339076.1860465114,
            "unit": "ns",
            "range": "± 121863.87867524193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3442354.1551724137,
            "unit": "ns",
            "range": "± 149553.98959133797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4279299.822033898,
            "unit": "ns",
            "range": "± 178570.2270409697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4116478.088235294,
            "unit": "ns",
            "range": "± 195673.53534030652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14676848.331578948,
            "unit": "ns",
            "range": "± 1689836.1497712985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6379671.332932692,
            "unit": "ns",
            "range": "± 72227.85610611852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1738810.4227519133,
            "unit": "ns",
            "range": "± 68956.21955272865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1114500.664453125,
            "unit": "ns",
            "range": "± 16864.026999482176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2737947.574120107,
            "unit": "ns",
            "range": "± 196464.04393319922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 907152.0017438616,
            "unit": "ns",
            "range": "± 8225.27130272291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 717248.4555338542,
            "unit": "ns",
            "range": "± 8667.058432559841"
          }
        ]
      }
    ]
  }
}