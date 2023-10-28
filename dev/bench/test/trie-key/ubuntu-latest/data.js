window.BENCHMARK_DATA = {
  "lastUpdate": 1698491265213,
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
          "id": "d513aa040397dea6f1673fd73b03d7ceec5b4e04",
          "message": "Fixed trie key conversion",
          "timestamp": "2023-10-28T19:52:12+09:00",
          "tree_id": "07ce30e41caa5c9406c7e657fa5b57405dd93423",
          "url": "https://github.com/greymistcube/libplanet/commit/d513aa040397dea6f1673fd73b03d7ceec5b4e04"
        },
        "date": 1698491153876,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50051.54761904762,
            "unit": "ns",
            "range": "± 2687.4425313206025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4969808.8171875,
            "unit": "ns",
            "range": "± 29923.289270953905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1603930.4907552083,
            "unit": "ns",
            "range": "± 6965.465900887464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1060803.7010416666,
            "unit": "ns",
            "range": "± 3996.139215863899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617717.8180803573,
            "unit": "ns",
            "range": "± 7354.4468260175545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823298.4694661458,
            "unit": "ns",
            "range": "± 2551.75700954541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757803.35625,
            "unit": "ns",
            "range": "± 2123.330879289537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7949783.461538462,
            "unit": "ns",
            "range": "± 66490.17565351966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22007370,
            "unit": "ns",
            "range": "± 381133.2765803285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53959367.3125,
            "unit": "ns",
            "range": "± 1052214.807814749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107625565.26086956,
            "unit": "ns",
            "range": "± 2664217.866174632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214351226.5,
            "unit": "ns",
            "range": "± 4543103.306217513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3343971.277777778,
            "unit": "ns",
            "range": "± 111494.66735553155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3511937.709677419,
            "unit": "ns",
            "range": "± 106573.56445829441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4193390.2666666666,
            "unit": "ns",
            "range": "± 71491.83512268744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4014203,
            "unit": "ns",
            "range": "± 136924.94060951393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9322070.10638298,
            "unit": "ns",
            "range": "± 349446.33562258695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271270.44680851063,
            "unit": "ns",
            "range": "± 10480.620235148945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264090.0975609756,
            "unit": "ns",
            "range": "± 9170.39012748334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232628.9024390244,
            "unit": "ns",
            "range": "± 8253.068716558944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4358587.458333333,
            "unit": "ns",
            "range": "± 109980.05370974405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4009694.6842105263,
            "unit": "ns",
            "range": "± 84947.15211958591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19533.505376344085,
            "unit": "ns",
            "range": "± 1918.7467978936936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86938.41176470589,
            "unit": "ns",
            "range": "± 4702.189523671564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69267.2,
            "unit": "ns",
            "range": "± 2016.8782706501377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77002.83157894737,
            "unit": "ns",
            "range": "± 7880.9292486607455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4819.063157894737,
            "unit": "ns",
            "range": "± 538.5114197119077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18037.119565217392,
            "unit": "ns",
            "range": "± 1506.4675648710793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1367019.5208333333,
            "unit": "ns",
            "range": "± 92445.78393221438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2616588.093023256,
            "unit": "ns",
            "range": "± 95867.7493449561"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1969054.5154639175,
            "unit": "ns",
            "range": "± 125276.15272943955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7920795.545454546,
            "unit": "ns",
            "range": "± 405816.9871195683"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b13ef3155389100c218a045fbdc3051e23e3c669",
          "message": "Merge pull request #3451 from greymistcube/release/3.6.0\n\n🚀 Release 3.6.0",
          "timestamp": "2023-10-06T18:26:22+09:00",
          "tree_id": "45b24eea1bbbdcc0b75e430f611660d011258ba1",
          "url": "https://github.com/greymistcube/libplanet/commit/b13ef3155389100c218a045fbdc3051e23e3c669"
        },
        "date": 1698491256751,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52726.95744680851,
            "unit": "ns",
            "range": "± 6150.3813185656345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5171010.754464285,
            "unit": "ns",
            "range": "± 72885.16372018929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1627946.1440104167,
            "unit": "ns",
            "range": "± 28166.06860600155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1118052.3876378676,
            "unit": "ns",
            "range": "± 22494.652841159063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2669999.3063616073,
            "unit": "ns",
            "range": "± 24824.995576101537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 890605.8123697917,
            "unit": "ns",
            "range": "± 11243.483400078085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 798398.2361979167,
            "unit": "ns",
            "range": "± 12689.536290156357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7931929.571428572,
            "unit": "ns",
            "range": "± 135296.96516734772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20958904.25,
            "unit": "ns",
            "range": "± 262085.08560116155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52654252.36111111,
            "unit": "ns",
            "range": "± 1753163.4865438477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107558766.07843137,
            "unit": "ns",
            "range": "± 4358471.318958245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210836251.63333333,
            "unit": "ns",
            "range": "± 6165998.285730787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3332219.85106383,
            "unit": "ns",
            "range": "± 247107.30044689012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3505223.361445783,
            "unit": "ns",
            "range": "± 183278.67366507417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4296181.852631579,
            "unit": "ns",
            "range": "± 266233.12787623797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4263318.694736842,
            "unit": "ns",
            "range": "± 280882.5607080211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12295998.511627907,
            "unit": "ns",
            "range": "± 832206.0542524132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275320.4367816092,
            "unit": "ns",
            "range": "± 22676.016601759726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280879.78350515466,
            "unit": "ns",
            "range": "± 24654.30170723543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245174.46391752578,
            "unit": "ns",
            "range": "± 22357.597794645157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4198739.576923077,
            "unit": "ns",
            "range": "± 151401.3683110062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4198778.234693877,
            "unit": "ns",
            "range": "± 282758.47772911534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18619.260416666668,
            "unit": "ns",
            "range": "± 5181.921546146436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85190.18556701031,
            "unit": "ns",
            "range": "± 10523.852032931645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74057.0947368421,
            "unit": "ns",
            "range": "± 7346.860429583545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86001.46808510639,
            "unit": "ns",
            "range": "± 15307.846055334145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4918.376623376624,
            "unit": "ns",
            "range": "± 789.4402753810523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21026.59,
            "unit": "ns",
            "range": "± 6533.791077185057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1365275.6979166667,
            "unit": "ns",
            "range": "± 153353.45250588984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2662134.1170212766,
            "unit": "ns",
            "range": "± 194783.58971216794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2093614.1868131869,
            "unit": "ns",
            "range": "± 197571.10550617304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10579804.31521739,
            "unit": "ns",
            "range": "± 1208326.228745775"
          }
        ]
      }
    ]
  }
}