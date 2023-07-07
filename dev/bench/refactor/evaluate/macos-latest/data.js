window.BENCHMARK_DATA = {
  "lastUpdate": 1688700046372,
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
          "id": "89a25a4b080cbe374d3980a9597553c31d3a0b36",
          "message": "More argument clutter removal",
          "timestamp": "2023-07-07T00:28:26+09:00",
          "tree_id": "6712e28f56ebe2d34846870b23e67ddbe59dca6c",
          "url": "https://github.com/greymistcube/libplanet/commit/89a25a4b080cbe374d3980a9597553c31d3a0b36"
        },
        "date": 1688658359948,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8693817.11827957,
            "unit": "ns",
            "range": "± 503678.1574724955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21282432.95652174,
            "unit": "ns",
            "range": "± 493428.4203526179"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57159898.02542373,
            "unit": "ns",
            "range": "± 2532247.075846854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107847627.5,
            "unit": "ns",
            "range": "± 1794102.7261082884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219689768.25,
            "unit": "ns",
            "range": "± 5017670.09294856"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68170.32989690722,
            "unit": "ns",
            "range": "± 11238.826233124511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 329431.275862069,
            "unit": "ns",
            "range": "± 25814.552867267885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 375353.10869565216,
            "unit": "ns",
            "range": "± 50956.08954678669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 329011.98387096776,
            "unit": "ns",
            "range": "± 38690.9651822065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4192641.730769231,
            "unit": "ns",
            "range": "± 114386.95392414564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3756606.9285714286,
            "unit": "ns",
            "range": "± 64362.77480119925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15750.78947368421,
            "unit": "ns",
            "range": "± 1336.2279068470896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91198.33333333333,
            "unit": "ns",
            "range": "± 12747.96487479392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109450.53125,
            "unit": "ns",
            "range": "± 11874.663939358341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120358.48913043478,
            "unit": "ns",
            "range": "± 10080.429216937282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6169.787234042553,
            "unit": "ns",
            "range": "± 1253.7210496649216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21696,
            "unit": "ns",
            "range": "± 4365.020852929758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1609714.18,
            "unit": "ns",
            "range": "± 164021.81097276503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2803440.8,
            "unit": "ns",
            "range": "± 123414.55413290497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2009761.4895833333,
            "unit": "ns",
            "range": "± 135254.75872044652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5950072.830985916,
            "unit": "ns",
            "range": "± 251550.14185826626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3640299.714285714,
            "unit": "ns",
            "range": "± 380363.40256776527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3814175.214285714,
            "unit": "ns",
            "range": "± 450106.5408764381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4862795.547368421,
            "unit": "ns",
            "range": "± 342050.5172510301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4159821.0918367347,
            "unit": "ns",
            "range": "± 343955.62635700696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8649220.8814433,
            "unit": "ns",
            "range": "± 954754.9594247603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7433073.433948863,
            "unit": "ns",
            "range": "± 178050.74194841395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2011494.0389364918,
            "unit": "ns",
            "range": "± 60815.143928495236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1377179.3255208333,
            "unit": "ns",
            "range": "± 18559.517472829404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3029465.775546875,
            "unit": "ns",
            "range": "± 212337.2774356288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854128.3619791666,
            "unit": "ns",
            "range": "± 15775.026982495585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764430.3876953125,
            "unit": "ns",
            "range": "± 4727.937131087943"
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
          "id": "2deaafe8be13aec1e4a3c923d15099d9acf93a02",
          "message": "More argument clutter removal",
          "timestamp": "2023-07-07T12:01:12+09:00",
          "tree_id": "c7f9d9cdecc9cc5e46736f54e11266a42b3a87b6",
          "url": "https://github.com/greymistcube/libplanet/commit/2deaafe8be13aec1e4a3c923d15099d9acf93a02"
        },
        "date": 1688700015244,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8461579.714285715,
            "unit": "ns",
            "range": "± 122375.09667816001"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22949813.80882353,
            "unit": "ns",
            "range": "± 1095469.5603269148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53239274.44594595,
            "unit": "ns",
            "range": "± 1589543.1526471328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108089528.24285714,
            "unit": "ns",
            "range": "± 3487075.0051419493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221706237.54761904,
            "unit": "ns",
            "range": "± 4960449.913476926"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76180.36206896552,
            "unit": "ns",
            "range": "± 5393.909944778621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341763.3369565217,
            "unit": "ns",
            "range": "± 28078.241875503503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322986.35555555555,
            "unit": "ns",
            "range": "± 27030.148768669944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312705.9210526316,
            "unit": "ns",
            "range": "± 15463.038713235424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4225215.742424242,
            "unit": "ns",
            "range": "± 131767.2956742848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3944505.72,
            "unit": "ns",
            "range": "± 93235.98172000621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17756.566666666666,
            "unit": "ns",
            "range": "± 2401.556863014518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108037.47,
            "unit": "ns",
            "range": "± 13601.334852387381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111244.29896907216,
            "unit": "ns",
            "range": "± 10957.158362387414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118443.86842105263,
            "unit": "ns",
            "range": "± 13936.89946825885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8410.541666666666,
            "unit": "ns",
            "range": "± 1645.1609418416801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20288.541666666668,
            "unit": "ns",
            "range": "± 3120.4136565076265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1779796.8777777778,
            "unit": "ns",
            "range": "± 240582.26829804882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3093060.338983051,
            "unit": "ns",
            "range": "± 134800.92731066112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2288633.952631579,
            "unit": "ns",
            "range": "± 234819.29123838444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6021844.083333333,
            "unit": "ns",
            "range": "± 235809.19039728434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3343234.078125,
            "unit": "ns",
            "range": "± 140425.4389922581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3625963.285714286,
            "unit": "ns",
            "range": "± 174066.81645766675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4601929.8,
            "unit": "ns",
            "range": "± 139033.56892804912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4053152.518987342,
            "unit": "ns",
            "range": "± 205275.1727144448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7747178.959459459,
            "unit": "ns",
            "range": "± 380015.55878905614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6538531.225341797,
            "unit": "ns",
            "range": "± 202209.2996293372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1971459.9701450893,
            "unit": "ns",
            "range": "± 27105.80107460872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1297885.081280048,
            "unit": "ns",
            "range": "± 7447.786843987665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2830986.4109157985,
            "unit": "ns",
            "range": "± 93456.28140375543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 781073.0608473558,
            "unit": "ns",
            "range": "± 5281.920132223968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 792902.3015625,
            "unit": "ns",
            "range": "± 7689.854809358734"
          }
        ]
      }
    ]
  }
}