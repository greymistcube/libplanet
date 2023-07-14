window.BENCHMARK_DATA = {
  "lastUpdate": 1689323934901,
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
          "id": "f2c4aee1803596e177022ea1920efaac6587e0ef",
          "message": "Prepare 2.4.2",
          "timestamp": "2023-07-14T17:22:48+09:00",
          "tree_id": "29f5b2dadb9582f291c89f15d3058758bae66af2",
          "url": "https://github.com/greymistcube/libplanet/commit/f2c4aee1803596e177022ea1920efaac6587e0ef"
        },
        "date": 1689323853755,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1359741,
            "unit": "ns",
            "range": "± 107263.15237571455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2374011.111111111,
            "unit": "ns",
            "range": "± 72416.85588226691"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1717591,
            "unit": "ns",
            "range": "± 138771.59716890226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4607885.915492957,
            "unit": "ns",
            "range": "± 225394.91963838218"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43348.75,
            "unit": "ns",
            "range": "± 2267.3797820280056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6786353.333333333,
            "unit": "ns",
            "range": "± 40798.667111748124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18030985.714285713,
            "unit": "ns",
            "range": "± 140886.3473057019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45881157.692307696,
            "unit": "ns",
            "range": "± 206066.11180855875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90661346.66666667,
            "unit": "ns",
            "range": "± 1103907.8467404959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184875540,
            "unit": "ns",
            "range": "± 1808456.8270845094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4943984.151785715,
            "unit": "ns",
            "range": "± 11839.86355605218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1532058.5546875,
            "unit": "ns",
            "range": "± 2052.3151685265975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1165514.7181919643,
            "unit": "ns",
            "range": "± 2129.451340005384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2592136.3671875,
            "unit": "ns",
            "range": "± 4026.71457864244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817810.3841145834,
            "unit": "ns",
            "range": "± 759.0053680630255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738258.41796875,
            "unit": "ns",
            "range": "± 745.1851215945056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3174471.4285714286,
            "unit": "ns",
            "range": "± 45383.281038309666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3152426.6666666665,
            "unit": "ns",
            "range": "± 56954.11018237988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4004878.5714285714,
            "unit": "ns",
            "range": "± 61339.23551192021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3415237.234042553,
            "unit": "ns",
            "range": "± 121598.35277957059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5883491.666666667,
            "unit": "ns",
            "range": "± 149590.1151020076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254012.22222222222,
            "unit": "ns",
            "range": "± 9497.614267155555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238742.85714285713,
            "unit": "ns",
            "range": "± 7595.959865071498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219754.6511627907,
            "unit": "ns",
            "range": "± 11950.305504111051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3865057.1428571427,
            "unit": "ns",
            "range": "± 45109.67343444904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3493956.6666666665,
            "unit": "ns",
            "range": "± 36764.91857865645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17196.067415730337,
            "unit": "ns",
            "range": "± 1373.8678131941024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80394.04761904762,
            "unit": "ns",
            "range": "± 4297.977983272257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66638.77551020408,
            "unit": "ns",
            "range": "± 2499.5679898843364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82369.8795180723,
            "unit": "ns",
            "range": "± 5969.67407166358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4283.1578947368425,
            "unit": "ns",
            "range": "± 621.19525000906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17328.42105263158,
            "unit": "ns",
            "range": "± 1871.7191527539899"
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
          "id": "f16dcf2de27aaa03bf5448c06e7c1089506aab0f",
          "message": "Prepare 2.4.2",
          "timestamp": "2023-07-14T17:23:37+09:00",
          "tree_id": "517c6b292d84287d60461f4e3faf83a43b97c6a6",
          "url": "https://github.com/greymistcube/libplanet/commit/f16dcf2de27aaa03bf5448c06e7c1089506aab0f"
        },
        "date": 1689323913260,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1302991.8918918918,
            "unit": "ns",
            "range": "± 65386.358086140375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2528290.625,
            "unit": "ns",
            "range": "± 115475.34570751387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1750980.612244898,
            "unit": "ns",
            "range": "± 114873.57318424521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4588088.571428572,
            "unit": "ns",
            "range": "± 147816.10150976866"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45807.692307692305,
            "unit": "ns",
            "range": "± 2363.7285773144063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6999415.384615385,
            "unit": "ns",
            "range": "± 48098.99247305578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18306800,
            "unit": "ns",
            "range": "± 68803.22182378768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46678850,
            "unit": "ns",
            "range": "± 314968.59123020264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92270533.33333333,
            "unit": "ns",
            "range": "± 266953.6226887859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186132046.15384614,
            "unit": "ns",
            "range": "± 530528.0303863699"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5006183.705357143,
            "unit": "ns",
            "range": "± 21077.50166103993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1529065.6529017857,
            "unit": "ns",
            "range": "± 5283.451189021756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1135999.8860677083,
            "unit": "ns",
            "range": "± 1082.9511047738504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2593315.5412946427,
            "unit": "ns",
            "range": "± 9469.264746727835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823453.75,
            "unit": "ns",
            "range": "± 3903.0197078391157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737482.1364182692,
            "unit": "ns",
            "range": "± 1598.775113883344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3042654.761904762,
            "unit": "ns",
            "range": "± 105571.15552654628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3176090.3225806453,
            "unit": "ns",
            "range": "± 96199.05874397008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4078246.6666666665,
            "unit": "ns",
            "range": "± 64830.954540764455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3565096.3636363638,
            "unit": "ns",
            "range": "± 150501.2144206403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5994263.333333333,
            "unit": "ns",
            "range": "± 178349.38489368002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264410.4166666667,
            "unit": "ns",
            "range": "± 10179.437755307725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245130.95238095237,
            "unit": "ns",
            "range": "± 8829.150391279076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221561.42857142858,
            "unit": "ns",
            "range": "± 10723.28217190531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3900513.3333333335,
            "unit": "ns",
            "range": "± 44867.5012304749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3503542.8571428573,
            "unit": "ns",
            "range": "± 49895.64054158384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18960.416666666668,
            "unit": "ns",
            "range": "± 2035.6030616408013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84358.24175824175,
            "unit": "ns",
            "range": "± 4825.581506330286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72588.29787234042,
            "unit": "ns",
            "range": "± 5565.680288303338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93759.78260869565,
            "unit": "ns",
            "range": "± 10933.47576299111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4689.36170212766,
            "unit": "ns",
            "range": "± 765.0241524202481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18081.182795698925,
            "unit": "ns",
            "range": "± 1568.1599917421677"
          }
        ]
      }
    ]
  }
}