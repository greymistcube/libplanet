window.BENCHMARK_DATA = {
  "lastUpdate": 1700489530403,
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
          "id": "042a411a6c690539a60bf06b6782266d92b0912d",
          "message": "Merge tag '3.6.1' into port/3.6.1-to-3.7.1\n\nLibplanet 3.6.1",
          "timestamp": "2023-11-20T22:58:48+09:00",
          "tree_id": "f9aaad040af6fff0f596d095db3d0c052e4f5abf",
          "url": "https://github.com/greymistcube/libplanet/commit/042a411a6c690539a60bf06b6782266d92b0912d"
        },
        "date": 1700489488366,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 977151.5463917525,
            "unit": "ns",
            "range": "± 100244.78177753407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1765972.2222222222,
            "unit": "ns",
            "range": "± 80672.38693838751"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1379829.569892473,
            "unit": "ns",
            "range": "± 121360.04961803228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4928509.090909091,
            "unit": "ns",
            "range": "± 153931.8241211762"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39869.66292134832,
            "unit": "ns",
            "range": "± 2226.922279656899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4873653.333333333,
            "unit": "ns",
            "range": "± 58110.70551316767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13357653.846153846,
            "unit": "ns",
            "range": "± 117416.50661487518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33334420,
            "unit": "ns",
            "range": "± 419747.74941964506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65076021.428571425,
            "unit": "ns",
            "range": "± 499775.37905092374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129553575,
            "unit": "ns",
            "range": "± 1554938.1350599246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3271502.2916666665,
            "unit": "ns",
            "range": "± 8183.885525380874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1078097.2005208333,
            "unit": "ns",
            "range": "± 3551.1117730648857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 743249.3880208334,
            "unit": "ns",
            "range": "± 1725.6410538841196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1911766.0807291667,
            "unit": "ns",
            "range": "± 3193.565586998613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629583.28125,
            "unit": "ns",
            "range": "± 1377.0038514909052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568785.0446428572,
            "unit": "ns",
            "range": "± 489.80955512699677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2059555.6603773586,
            "unit": "ns",
            "range": "± 57301.635817347975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2300152.1739130435,
            "unit": "ns",
            "range": "± 56024.80675854238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2802901.6393442624,
            "unit": "ns",
            "range": "± 126202.719848931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2684322.972972973,
            "unit": "ns",
            "range": "± 134617.2479202264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5859241.025641026,
            "unit": "ns",
            "range": "± 190413.55231228564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178457.57575757575,
            "unit": "ns",
            "range": "± 7365.623073671585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173424.6913580247,
            "unit": "ns",
            "range": "± 8669.004136349768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141050,
            "unit": "ns",
            "range": "± 3697.6749451513447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2688871.4285714286,
            "unit": "ns",
            "range": "± 36204.364984847394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2485414.285714286,
            "unit": "ns",
            "range": "± 28732.85059468871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13279.569892473119,
            "unit": "ns",
            "range": "± 1505.0320767768246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59240,
            "unit": "ns",
            "range": "± 6440.652140893809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48142.55319148936,
            "unit": "ns",
            "range": "± 5081.750806619812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68435.35353535354,
            "unit": "ns",
            "range": "± 16032.023521379448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3020,
            "unit": "ns",
            "range": "± 608.5560167576317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12421.42857142857,
            "unit": "ns",
            "range": "± 2394.075591568555"
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
          "id": "4423414b6ac2e33ad562eb7eb03b11033eda8d11",
          "message": "Changelog",
          "timestamp": "2023-11-20T23:00:01+09:00",
          "tree_id": "acbf576ffed94e9f951fd1e72fa90f9712fea70c",
          "url": "https://github.com/greymistcube/libplanet/commit/4423414b6ac2e33ad562eb7eb03b11033eda8d11"
        },
        "date": 1700489512500,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 929060.8695652174,
            "unit": "ns",
            "range": "± 69163.85061723052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1694559.2592592593,
            "unit": "ns",
            "range": "± 64716.1742884674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1304791.6666666667,
            "unit": "ns",
            "range": "± 109042.64416096135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5116512.820512821,
            "unit": "ns",
            "range": "± 263164.67665948643"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35191.30434782609,
            "unit": "ns",
            "range": "± 2929.038103891245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5091166.666666667,
            "unit": "ns",
            "range": "± 73320.0972903519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13340235.714285715,
            "unit": "ns",
            "range": "± 161798.97597442832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32734086.666666668,
            "unit": "ns",
            "range": "± 367617.6932370807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66392853.333333336,
            "unit": "ns",
            "range": "± 1172041.950655026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133732060,
            "unit": "ns",
            "range": "± 1256305.9749007917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3230251.590401786,
            "unit": "ns",
            "range": "± 6984.610741442887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1049577.3158482143,
            "unit": "ns",
            "range": "± 2243.8684810022296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731600.3069196428,
            "unit": "ns",
            "range": "± 1926.0249149870579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1957625.1395089286,
            "unit": "ns",
            "range": "± 5632.287610671337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 596647.6337139423,
            "unit": "ns",
            "range": "± 2880.784177369192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560432.51953125,
            "unit": "ns",
            "range": "± 1020.8208305401406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2135634.4827586208,
            "unit": "ns",
            "range": "± 87423.17841060218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2295813.3333333335,
            "unit": "ns",
            "range": "± 42724.162896867805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2812866.6666666665,
            "unit": "ns",
            "range": "± 102100.67483331557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2628275.362318841,
            "unit": "ns",
            "range": "± 126057.9131680882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5949479.166666667,
            "unit": "ns",
            "range": "± 152434.73864936904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179266.1971830986,
            "unit": "ns",
            "range": "± 8654.857325917737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167876.59574468085,
            "unit": "ns",
            "range": "± 11384.7797427886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142269.23076923078,
            "unit": "ns",
            "range": "± 3811.4321959881936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2675172.727272727,
            "unit": "ns",
            "range": "± 64839.09154366517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2417671.4285714286,
            "unit": "ns",
            "range": "± 38424.56002593671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10943.010752688173,
            "unit": "ns",
            "range": "± 1333.2208344311848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55604.166666666664,
            "unit": "ns",
            "range": "± 6334.415881626616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46575,
            "unit": "ns",
            "range": "± 3198.3726974960114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55238.09523809524,
            "unit": "ns",
            "range": "± 8332.93515973589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2350.5263157894738,
            "unit": "ns",
            "range": "± 476.88566010182177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9862.222222222223,
            "unit": "ns",
            "range": "± 1152.6791242776837"
          }
        ]
      }
    ]
  }
}