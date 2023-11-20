window.BENCHMARK_DATA = {
  "lastUpdate": 1700474766723,
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
          "id": "f3f4e5b759618d4e75743079f96e9f52a5b3d858",
          "message": "Merge tag '3.6.1' into port/3.6.1-to-3.7.1\n\nLibplanet 3.6.1",
          "timestamp": "2023-11-20T18:51:01+09:00",
          "tree_id": "e33d04c7f511c4252489a6a9e0fc970da5173b30",
          "url": "https://github.com/greymistcube/libplanet/commit/f3f4e5b759618d4e75743079f96e9f52a5b3d858"
        },
        "date": 1700474718572,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 977206.0606060605,
            "unit": "ns",
            "range": "± 114108.09395372176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1724060.3174603174,
            "unit": "ns",
            "range": "± 58099.962633052615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1370687.5,
            "unit": "ns",
            "range": "± 123580.32993712398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5146261.29032258,
            "unit": "ns",
            "range": "± 312712.1624253712"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34372.666666666664,
            "unit": "ns",
            "range": "± 1751.8772428095167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5141364.285714285,
            "unit": "ns",
            "range": "± 53459.08006838728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13189143.333333334,
            "unit": "ns",
            "range": "± 109869.67257792731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32809250,
            "unit": "ns",
            "range": "± 539840.2014271659"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65863021.428571425,
            "unit": "ns",
            "range": "± 576871.1803654814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132101653.84615384,
            "unit": "ns",
            "range": "± 1054603.0569329427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3339169.296875,
            "unit": "ns",
            "range": "± 17065.72292854919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1063455.0362723214,
            "unit": "ns",
            "range": "± 1304.6427513903282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759597.1223958334,
            "unit": "ns",
            "range": "± 1180.0312221374375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936578.59375,
            "unit": "ns",
            "range": "± 1695.0080069550943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612087.1419270834,
            "unit": "ns",
            "range": "± 786.2712656634342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568218.8411458334,
            "unit": "ns",
            "range": "± 1342.9560957677315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2179032.0754716983,
            "unit": "ns",
            "range": "± 90534.34276897126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2291946.7741935486,
            "unit": "ns",
            "range": "± 68312.9342749037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2818579.069767442,
            "unit": "ns",
            "range": "± 98068.43470163246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2706618.75,
            "unit": "ns",
            "range": "± 48859.05195901097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5971581.481481481,
            "unit": "ns",
            "range": "± 250644.46598686208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177154.16666666666,
            "unit": "ns",
            "range": "± 6961.656636215791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171470.45454545456,
            "unit": "ns",
            "range": "± 5661.521676683774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143448.71794871794,
            "unit": "ns",
            "range": "± 4407.342664885724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2720815.3846153845,
            "unit": "ns",
            "range": "± 36247.984913046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2504442.8571428573,
            "unit": "ns",
            "range": "± 30532.472355377122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11725,
            "unit": "ns",
            "range": "± 1197.3390036473265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57630.52631578947,
            "unit": "ns",
            "range": "± 6866.664365416357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47406.98924731183,
            "unit": "ns",
            "range": "± 3561.0024800506108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66136.36363636363,
            "unit": "ns",
            "range": "± 16327.111886683964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2957.1428571428573,
            "unit": "ns",
            "range": "± 611.4458106663608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12098.888888888889,
            "unit": "ns",
            "range": "± 1355.1810231452969"
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
          "id": "86ab4423f441b9207d73886941dca2c810502142",
          "message": "Changelog",
          "timestamp": "2023-11-20T18:53:37+09:00",
          "tree_id": "7b2d200491c069bfa925e051918907d9765d8cac",
          "url": "https://github.com/greymistcube/libplanet/commit/86ab4423f441b9207d73886941dca2c810502142"
        },
        "date": 1700474747583,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 987794.8979591837,
            "unit": "ns",
            "range": "± 113642.44648811425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1752127.5862068965,
            "unit": "ns",
            "range": "± 75937.76489949539"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1358127.0833333333,
            "unit": "ns",
            "range": "± 124054.80578244156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5086388.095238095,
            "unit": "ns",
            "range": "± 232235.64883510402"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34548.88888888889,
            "unit": "ns",
            "range": "± 2004.7832937580397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4907440,
            "unit": "ns",
            "range": "± 61274.91679775199"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13194940,
            "unit": "ns",
            "range": "± 123576.46447211772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32311642.85714286,
            "unit": "ns",
            "range": "± 247764.1083906089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63844742.85714286,
            "unit": "ns",
            "range": "± 381823.3153905405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133981060,
            "unit": "ns",
            "range": "± 1309360.6579439556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3370446.9951923075,
            "unit": "ns",
            "range": "± 9918.249540609677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1044453.8225446428,
            "unit": "ns",
            "range": "± 1044.247610891129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729872.4153645834,
            "unit": "ns",
            "range": "± 2086.955398340265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925635.1041666667,
            "unit": "ns",
            "range": "± 4185.686245202362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 603541.3411458334,
            "unit": "ns",
            "range": "± 979.7877826704266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576053.4830729166,
            "unit": "ns",
            "range": "± 2953.645493283888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2089486.4864864864,
            "unit": "ns",
            "range": "± 42855.23540013753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2249845.8333333335,
            "unit": "ns",
            "range": "± 87265.3692086418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2716500,
            "unit": "ns",
            "range": "± 85891.40430411726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2513675,
            "unit": "ns",
            "range": "± 79275.8302854146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5992809.230769231,
            "unit": "ns",
            "range": "± 277191.06492807716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177480.30303030304,
            "unit": "ns",
            "range": "± 8264.18072065725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170014.86486486485,
            "unit": "ns",
            "range": "± 8466.443552037923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140081.0810810811,
            "unit": "ns",
            "range": "± 4676.527548289426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2658813.3333333335,
            "unit": "ns",
            "range": "± 38020.91279182826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2494884.210526316,
            "unit": "ns",
            "range": "± 52774.75473028847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11560,
            "unit": "ns",
            "range": "± 1443.4509211600348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54104.255319148935,
            "unit": "ns",
            "range": "± 5636.071706268224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44994.252873563215,
            "unit": "ns",
            "range": "± 2383.926618282938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54350.51546391752,
            "unit": "ns",
            "range": "± 10818.48460305459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2602.0408163265306,
            "unit": "ns",
            "range": "± 537.2667735359394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9879.775280898877,
            "unit": "ns",
            "range": "± 1222.25385840341"
          }
        ]
      }
    ]
  }
}