window.BENCHMARK_DATA = {
  "lastUpdate": 1684226978701,
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
          "id": "677c66337b332a9e1966f6d61ca2312d04090702",
          "message": "Removed IActionContext.Rehearsal property",
          "timestamp": "2023-05-16T17:28:31+09:00",
          "tree_id": "9ffcc97be1fa4ee52e06a68f2d8e8fe744d2a162",
          "url": "https://github.com/greymistcube/libplanet/commit/677c66337b332a9e1966f6d61ca2312d04090702"
        },
        "date": 1684226683194,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1352125.7731958763,
            "unit": "ns",
            "range": "± 116515.73774097225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2444100,
            "unit": "ns",
            "range": "± 90633.65101137753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2377980,
            "unit": "ns",
            "range": "± 54501.034273141144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5199606.41025641,
            "unit": "ns",
            "range": "± 267480.9784909552"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41451.21951219512,
            "unit": "ns",
            "range": "± 2185.0357458125877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6812792.307692308,
            "unit": "ns",
            "range": "± 11634.894465820016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17174940,
            "unit": "ns",
            "range": "± 124825.13368709043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44638600,
            "unit": "ns",
            "range": "± 364815.10596254305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 86998813.33333333,
            "unit": "ns",
            "range": "± 751423.8587666814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 175669678.57142857,
            "unit": "ns",
            "range": "± 1142894.3232516642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4771436.71875,
            "unit": "ns",
            "range": "± 11525.255675268178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1505897.8097098214,
            "unit": "ns",
            "range": "± 1863.6350001286028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1133802.1484375,
            "unit": "ns",
            "range": "± 1507.2399384489731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572739.2708333335,
            "unit": "ns",
            "range": "± 6171.256949563049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816750.8021763393,
            "unit": "ns",
            "range": "± 3300.612897617186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725659.0787760416,
            "unit": "ns",
            "range": "± 1091.7340086117138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2811110,
            "unit": "ns",
            "range": "± 44367.90318837857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3106860,
            "unit": "ns",
            "range": "± 92569.32388290373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3917863.0434782607,
            "unit": "ns",
            "range": "± 97051.92754559904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3841530,
            "unit": "ns",
            "range": "± 153963.57672899027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6270517.777777778,
            "unit": "ns",
            "range": "± 195834.00007623443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248028.57142857142,
            "unit": "ns",
            "range": "± 8963.919159045081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236171.15384615384,
            "unit": "ns",
            "range": "± 8641.789405715117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203929.8245614035,
            "unit": "ns",
            "range": "± 8857.21991437092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3798166.6666666665,
            "unit": "ns",
            "range": "± 54088.50771343823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3504133.3333333335,
            "unit": "ns",
            "range": "± 45805.90521298485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16253.684210526315,
            "unit": "ns",
            "range": "± 1856.2608564803686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79297.67441860466,
            "unit": "ns",
            "range": "± 4324.811502024541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65305.1282051282,
            "unit": "ns",
            "range": "± 2263.782200555512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86416.32653061225,
            "unit": "ns",
            "range": "± 14327.413662025469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4138.144329896907,
            "unit": "ns",
            "range": "± 663.3945688290567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16638.541666666668,
            "unit": "ns",
            "range": "± 1379.5781042094118"
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
          "id": "08bb683f346859d29e325c9dacf39c9f72e3a9b0",
          "message": "Changelog",
          "timestamp": "2023-05-16T17:32:31+09:00",
          "tree_id": "331832bd05821743d2d84e301db65359b1f52599",
          "url": "https://github.com/greymistcube/libplanet/commit/08bb683f346859d29e325c9dacf39c9f72e3a9b0"
        },
        "date": 1684226955861,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1354752.0833333333,
            "unit": "ns",
            "range": "± 100598.88037377025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2494186.6666666665,
            "unit": "ns",
            "range": "± 39284.691068925975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2161677.659574468,
            "unit": "ns",
            "range": "± 135155.36193999177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5330222.7272727275,
            "unit": "ns",
            "range": "± 248313.9419831613"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49156.98924731183,
            "unit": "ns",
            "range": "± 2919.4027772765585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7225438.775510204,
            "unit": "ns",
            "range": "± 270716.77298141207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19805453.333333332,
            "unit": "ns",
            "range": "± 301456.7390585414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50728793.333333336,
            "unit": "ns",
            "range": "± 557457.437794475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99361666.66666667,
            "unit": "ns",
            "range": "± 1184593.4321630395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200217560,
            "unit": "ns",
            "range": "± 3522400.489073974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4823012.611607143,
            "unit": "ns",
            "range": "± 20105.215338923288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1525751.2109375,
            "unit": "ns",
            "range": "± 15795.247431385018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1169166.3161057692,
            "unit": "ns",
            "range": "± 4263.972345353884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2665146.454326923,
            "unit": "ns",
            "range": "± 14896.130002891616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 850595.1985677084,
            "unit": "ns",
            "range": "± 6303.514262575327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765279.35546875,
            "unit": "ns",
            "range": "± 5566.886107332072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3085260.606060606,
            "unit": "ns",
            "range": "± 134143.63929275202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3229080.3921568627,
            "unit": "ns",
            "range": "± 130787.89243597105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4066067.4418604653,
            "unit": "ns",
            "range": "± 143213.4516176902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4090666.6666666665,
            "unit": "ns",
            "range": "± 144647.49157238027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6666185,
            "unit": "ns",
            "range": "± 145753.7442870138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 265071.4285714286,
            "unit": "ns",
            "range": "± 4299.98722206126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257439.13043478262,
            "unit": "ns",
            "range": "± 6466.187518752297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233019.38775510204,
            "unit": "ns",
            "range": "± 14170.178197071331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3989907.6923076925,
            "unit": "ns",
            "range": "± 56097.16958900365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3579135.714285714,
            "unit": "ns",
            "range": "± 55868.12228733026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19943.617021276597,
            "unit": "ns",
            "range": "± 1777.370203699129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86564.58333333333,
            "unit": "ns",
            "range": "± 7231.66981032832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72177.17391304347,
            "unit": "ns",
            "range": "± 4045.5946264436575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100243.43434343435,
            "unit": "ns",
            "range": "± 14984.748447809012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5775,
            "unit": "ns",
            "range": "± 842.3026084552548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18504.166666666668,
            "unit": "ns",
            "range": "± 1955.9849674735374"
          }
        ]
      }
    ]
  }
}