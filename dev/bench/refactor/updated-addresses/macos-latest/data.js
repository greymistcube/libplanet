window.BENCHMARK_DATA = {
  "lastUpdate": 1699002911867,
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
      }
    ]
  }
}