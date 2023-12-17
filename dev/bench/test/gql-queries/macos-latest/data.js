window.BENCHMARK_DATA = {
  "lastUpdate": 1702833237888,
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
          "id": "c689d1b4cf3864c605b1a32010df2b7ce79e05d4",
          "message": "Helper query fix",
          "timestamp": "2023-12-18T01:43:52+09:00",
          "tree_id": "2d5fa37595f9a90ef0e48d0f22016c0602b7db0a",
          "url": "https://github.com/greymistcube/libplanet/commit/c689d1b4cf3864c605b1a32010df2b7ce79e05d4"
        },
        "date": 1702832194770,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7617408.882352941,
            "unit": "ns",
            "range": "± 123369.59477211269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18771553.714285713,
            "unit": "ns",
            "range": "± 201078.76751103843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45941808.71428572,
            "unit": "ns",
            "range": "± 426304.4357718985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92425359.70588236,
            "unit": "ns",
            "range": "± 1768084.623958783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192662533.7419355,
            "unit": "ns",
            "range": "± 5747049.513108135"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33824.0459770115,
            "unit": "ns",
            "range": "± 2475.7004689208716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 215423.275,
            "unit": "ns",
            "range": "± 10204.004943425058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211382.74731182796,
            "unit": "ns",
            "range": "± 17728.799616453056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185125.40322580645,
            "unit": "ns",
            "range": "± 5577.444369092585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3654770.9375,
            "unit": "ns",
            "range": "± 67752.12735943549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3387670.785714286,
            "unit": "ns",
            "range": "± 42939.48681427884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12656.708333333334,
            "unit": "ns",
            "range": "± 1195.8588714187297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55828.554945054944,
            "unit": "ns",
            "range": "± 3736.6990791417243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50816.47368421053,
            "unit": "ns",
            "range": "± 2585.682481015714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63143.18947368421,
            "unit": "ns",
            "range": "± 11997.46199782478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3233.114942528736,
            "unit": "ns",
            "range": "± 332.6320834099733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12241.647727272728,
            "unit": "ns",
            "range": "± 1259.7697293669419"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1011566.8723404255,
            "unit": "ns",
            "range": "± 63427.82856946381"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2221397.643678161,
            "unit": "ns",
            "range": "± 118035.10356028767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1531971.21875,
            "unit": "ns",
            "range": "± 107351.31788333335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6773546.301886792,
            "unit": "ns",
            "range": "± 270613.8460644461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2992254.3684210526,
            "unit": "ns",
            "range": "± 64362.179497668185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2984392.5789473685,
            "unit": "ns",
            "range": "± 129137.36311260458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3586536.4929577466,
            "unit": "ns",
            "range": "± 172016.40957186723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3416373.9384615384,
            "unit": "ns",
            "range": "± 159041.4289457975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14182982.54,
            "unit": "ns",
            "range": "± 2397862.461841604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4333297.33984375,
            "unit": "ns",
            "range": "± 89636.22430675985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1309651.578876202,
            "unit": "ns",
            "range": "± 10195.028853513979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 863077.950390625,
            "unit": "ns",
            "range": "± 10692.201419968607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940454.3411458333,
            "unit": "ns",
            "range": "± 30401.064139643542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 643762.4900390625,
            "unit": "ns",
            "range": "± 8985.977306502715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565339.0529947917,
            "unit": "ns",
            "range": "± 7090.76719450062"
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
          "id": "8a86e3239e44c05e48b9eded521b90b4786b4330",
          "message": "Fix validator set query",
          "timestamp": "2023-12-18T02:01:31+09:00",
          "tree_id": "98d7b9f8feb54900d52556e6e7fd2d6f6235c105",
          "url": "https://github.com/greymistcube/libplanet/commit/8a86e3239e44c05e48b9eded521b90b4786b4330"
        },
        "date": 1702833224979,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7684586.592592592,
            "unit": "ns",
            "range": "± 214214.82903461103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18672127.46153846,
            "unit": "ns",
            "range": "± 212437.20485303237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46852650.32608695,
            "unit": "ns",
            "range": "± 1127760.348501185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92238562.57142857,
            "unit": "ns",
            "range": "± 1513567.5148685314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187603195.46666667,
            "unit": "ns",
            "range": "± 2949571.2213499504"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33608.806818181816,
            "unit": "ns",
            "range": "± 2407.5290230305814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222400.83870967742,
            "unit": "ns",
            "range": "± 19472.508931652024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214442.19565217392,
            "unit": "ns",
            "range": "± 17055.079288051966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 198018.6489361702,
            "unit": "ns",
            "range": "± 18960.36440924443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3703892.4814814813,
            "unit": "ns",
            "range": "± 103451.18314576813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3385397.9166666665,
            "unit": "ns",
            "range": "± 24708.2515898796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12480.61052631579,
            "unit": "ns",
            "range": "± 945.0499063117951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57197.89772727273,
            "unit": "ns",
            "range": "± 4924.357639513388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50462.4756097561,
            "unit": "ns",
            "range": "± 2663.5941430062185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62039.67525773196,
            "unit": "ns",
            "range": "± 11174.049516821618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3396.9148936170213,
            "unit": "ns",
            "range": "± 497.3661090609831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11971.404255319148,
            "unit": "ns",
            "range": "± 917.7199108771734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1026963.5744680851,
            "unit": "ns",
            "range": "± 74364.03317023531"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2200380.905063291,
            "unit": "ns",
            "range": "± 110907.92266462544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1593333.383838384,
            "unit": "ns",
            "range": "± 131422.31259093384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6888429.898305085,
            "unit": "ns",
            "range": "± 304569.8709948459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2888514.595744681,
            "unit": "ns",
            "range": "± 111874.3649013131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2980592.8125,
            "unit": "ns",
            "range": "± 114316.53840266661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3558519.7647058824,
            "unit": "ns",
            "range": "± 114645.65877204548"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3372419.0208333335,
            "unit": "ns",
            "range": "± 125083.66254231428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14249304.58,
            "unit": "ns",
            "range": "± 2643577.169632192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4328466.615685096,
            "unit": "ns",
            "range": "± 34267.672442820825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1313072.7791666666,
            "unit": "ns",
            "range": "± 13471.462298665423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 884045.2436523438,
            "unit": "ns",
            "range": "± 10347.353680709724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949695.7875,
            "unit": "ns",
            "range": "± 22259.485012365316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635803.5243489583,
            "unit": "ns",
            "range": "± 8056.327423202773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558757.4041666667,
            "unit": "ns",
            "range": "± 6648.8842603586145"
          }
        ]
      }
    ]
  }
}