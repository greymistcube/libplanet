window.BENCHMARK_DATA = {
  "lastUpdate": 1681990911210,
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
          "id": "7d4b5b60a38872ddfec0219cc7eaa548c043e4ce",
          "message": "Removed unnecessary parameter",
          "timestamp": "2023-04-20T19:36:11+09:00",
          "tree_id": "a0bfe316525f740b16a78054e4210e2e299290b3",
          "url": "https://github.com/greymistcube/libplanet/commit/7d4b5b60a38872ddfec0219cc7eaa548c043e4ce"
        },
        "date": 1681987894473,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8007446.341772152,
            "unit": "ns",
            "range": "± 412574.3004192182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19190948.42,
            "unit": "ns",
            "range": "± 766849.991525465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48450751.2,
            "unit": "ns",
            "range": "± 1720964.261771099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97238591.8076923,
            "unit": "ns",
            "range": "± 3392378.1897169533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193743037,
            "unit": "ns",
            "range": "± 2967568.404415921"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56259.641304347824,
            "unit": "ns",
            "range": "± 7164.813222846441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 376669.05376344087,
            "unit": "ns",
            "range": "± 21689.085395436952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315895.59139784944,
            "unit": "ns",
            "range": "± 28624.668576868753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267062.737704918,
            "unit": "ns",
            "range": "± 11952.133305957896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5496746.263157895,
            "unit": "ns",
            "range": "± 188472.6194683998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3590795.269230769,
            "unit": "ns",
            "range": "± 79939.46914375035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18279.574468085106,
            "unit": "ns",
            "range": "± 2499.2237052339824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86993.03225806452,
            "unit": "ns",
            "range": "± 9297.303067874285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88140.48888888888,
            "unit": "ns",
            "range": "± 11963.342866641371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117967.03191489361,
            "unit": "ns",
            "range": "± 14166.320092245542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6161.040229885058,
            "unit": "ns",
            "range": "± 790.7466857579334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17886.577777777777,
            "unit": "ns",
            "range": "± 2025.5967187266951"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1544285.3645833333,
            "unit": "ns",
            "range": "± 157118.42369165333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2982313.934782609,
            "unit": "ns",
            "range": "± 240332.72598394673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2457402.711111111,
            "unit": "ns",
            "range": "± 201388.85418447523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7054453.12886598,
            "unit": "ns",
            "range": "± 519948.01806593523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3229158.327586207,
            "unit": "ns",
            "range": "± 269673.22030618304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3395293.5057471264,
            "unit": "ns",
            "range": "± 275139.3478797089"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4265526.180851064,
            "unit": "ns",
            "range": "± 165701.19638715667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4449765.29032258,
            "unit": "ns",
            "range": "± 439617.8886670288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8241297.517241379,
            "unit": "ns",
            "range": "± 356197.3078337461"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6318481.038461538,
            "unit": "ns",
            "range": "± 41626.46947396351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1914417.9288504464,
            "unit": "ns",
            "range": "± 20558.845755117232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1269926.130078125,
            "unit": "ns",
            "range": "± 20144.14139863153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630798.0697916667,
            "unit": "ns",
            "range": "± 25727.681584096015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844107.7115885416,
            "unit": "ns",
            "range": "± 13170.133652585977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763875.2720424107,
            "unit": "ns",
            "range": "± 9234.147461357275"
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
          "id": "07a0bfe33087eea170e6ab99ce1fc100448c72dd",
          "message": "Combined render options",
          "timestamp": "2023-04-20T20:11:53+09:00",
          "tree_id": "f21ee4839635d60f4b5b7580e473117b28f48f2d",
          "url": "https://github.com/greymistcube/libplanet/commit/07a0bfe33087eea170e6ab99ce1fc100448c72dd"
        },
        "date": 1681990524438,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8484266.563829787,
            "unit": "ns",
            "range": "± 330191.47602910415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21313085.05172414,
            "unit": "ns",
            "range": "± 930786.0333825416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55199349.126436785,
            "unit": "ns",
            "range": "± 4655108.37820214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109197677.41891892,
            "unit": "ns",
            "range": "± 5470394.296379644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208974426.95652175,
            "unit": "ns",
            "range": "± 5111759.163308019"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73842.72727272728,
            "unit": "ns",
            "range": "± 7228.012160119395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 452015.8762886598,
            "unit": "ns",
            "range": "± 68576.96665840411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 386501.55376344087,
            "unit": "ns",
            "range": "± 60706.92107189827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 344189.2840909091,
            "unit": "ns",
            "range": "± 57788.361076988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6035688.296703297,
            "unit": "ns",
            "range": "± 415761.6250742057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3977292.936170213,
            "unit": "ns",
            "range": "± 154182.69636945875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21073.86559139785,
            "unit": "ns",
            "range": "± 3096.589427463938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108197.53535353535,
            "unit": "ns",
            "range": "± 13249.212675347715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109390.0625,
            "unit": "ns",
            "range": "± 11596.977454503529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136330.13736263735,
            "unit": "ns",
            "range": "± 15791.409786840497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8682.152631578947,
            "unit": "ns",
            "range": "± 1807.884215180364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22547.155555555557,
            "unit": "ns",
            "range": "± 4140.612423250397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1645285.5979381443,
            "unit": "ns",
            "range": "± 152790.04525441793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3201340.8313253014,
            "unit": "ns",
            "range": "± 169326.11703209378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2748267.6224489794,
            "unit": "ns",
            "range": "± 305336.60050874576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7016126.680851064,
            "unit": "ns",
            "range": "± 246898.9968623067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4160086.0483870967,
            "unit": "ns",
            "range": "± 262292.02348057204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3495862.8777777776,
            "unit": "ns",
            "range": "± 224676.5102025066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4685094.635294118,
            "unit": "ns",
            "range": "± 252550.7711776484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4690965.94680851,
            "unit": "ns",
            "range": "± 380297.71569880395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9648978.445652174,
            "unit": "ns",
            "range": "± 1094482.7881115973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7241145.761494253,
            "unit": "ns",
            "range": "± 394059.41611687967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2232585.575239039,
            "unit": "ns",
            "range": "± 104752.91663838451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1402582.6635999177,
            "unit": "ns",
            "range": "± 30378.54547067618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3497304.026891447,
            "unit": "ns",
            "range": "± 270335.1061119292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1023029.4602640086,
            "unit": "ns",
            "range": "± 28756.030925456253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 876234.451960637,
            "unit": "ns",
            "range": "± 35676.048510772576"
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
          "id": "6721ce3b08e9324f50b146e197a443e95a1b2837",
          "message": "Combined render options",
          "timestamp": "2023-04-20T20:21:27+09:00",
          "tree_id": "5af8ba9308be94e705e44f41780c581976ad4fd5",
          "url": "https://github.com/greymistcube/libplanet/commit/6721ce3b08e9324f50b146e197a443e95a1b2837"
        },
        "date": 1681990811564,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9232445.5,
            "unit": "ns",
            "range": "± 178860.18978310964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23732013.15,
            "unit": "ns",
            "range": "± 1054963.998084067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60326236.192307696,
            "unit": "ns",
            "range": "± 828422.4708334092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120838484.05882353,
            "unit": "ns",
            "range": "± 2140064.4559482746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243715542.03225806,
            "unit": "ns",
            "range": "± 10759127.860736664"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69008.11538461539,
            "unit": "ns",
            "range": "± 8182.293242482997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 471179.6304347826,
            "unit": "ns",
            "range": "± 31727.460654049017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 372703.42424242425,
            "unit": "ns",
            "range": "± 10475.641970275326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 331945.4054054054,
            "unit": "ns",
            "range": "± 11281.929298315612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6579058.3125,
            "unit": "ns",
            "range": "± 58551.7522865812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4644261.769230769,
            "unit": "ns",
            "range": "± 46406.69593595635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20965.108695652172,
            "unit": "ns",
            "range": "± 1430.1115030417545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102854.5,
            "unit": "ns",
            "range": "± 8332.95075562666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93352.8829787234,
            "unit": "ns",
            "range": "± 8480.231755438273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126570.96315789473,
            "unit": "ns",
            "range": "± 11758.75031065415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5992.934065934066,
            "unit": "ns",
            "range": "± 521.927364086396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20147.923076923078,
            "unit": "ns",
            "range": "± 2251.2674367553204"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1841657.5,
            "unit": "ns",
            "range": "± 158326.1545189792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3590771.074074074,
            "unit": "ns",
            "range": "± 146386.6299504793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2957060.3041237113,
            "unit": "ns",
            "range": "± 250856.84998066456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8803785.860215053,
            "unit": "ns",
            "range": "± 868649.3728951534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4304014.192307692,
            "unit": "ns",
            "range": "± 117550.54087124202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4223385.880434782,
            "unit": "ns",
            "range": "± 262081.5111541707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5802941.744680851,
            "unit": "ns",
            "range": "± 329862.2442636051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5386064.15,
            "unit": "ns",
            "range": "± 335694.30582492804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10376725.850649351,
            "unit": "ns",
            "range": "± 505407.23442963266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6905368.923573369,
            "unit": "ns",
            "range": "± 174537.55393412994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2115284.4601004464,
            "unit": "ns",
            "range": "± 60050.76065807715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1437528.446953125,
            "unit": "ns",
            "range": "± 37215.1116982511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2768450.688701923,
            "unit": "ns",
            "range": "± 32215.678443783512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1029211.6792689732,
            "unit": "ns",
            "range": "± 16038.058676156761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 892375.7298828125,
            "unit": "ns",
            "range": "± 19800.98992958197"
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
          "id": "0502d279af0a906c6d238c1a6cafb84283534766",
          "message": "Changelog",
          "timestamp": "2023-04-20T20:25:26+09:00",
          "tree_id": "6b586792b8a407850815e44c7ba432f12ced39ee",
          "url": "https://github.com/greymistcube/libplanet/commit/0502d279af0a906c6d238c1a6cafb84283534766"
        },
        "date": 1681990898352,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8527589.241935484,
            "unit": "ns",
            "range": "± 385763.80287818465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20708421.230769232,
            "unit": "ns",
            "range": "± 251361.8467996399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51744076.35,
            "unit": "ns",
            "range": "± 1157062.354557677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101724026.34615384,
            "unit": "ns",
            "range": "± 1139028.5179792359"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210629912.2179487,
            "unit": "ns",
            "range": "± 6944701.463601226"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63600.19387755102,
            "unit": "ns",
            "range": "± 9245.295641187027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 392412.0215053763,
            "unit": "ns",
            "range": "± 30718.713143187586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327664.05376344087,
            "unit": "ns",
            "range": "± 31562.955514875895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302806.79591836734,
            "unit": "ns",
            "range": "± 27033.70188233709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5479352.64,
            "unit": "ns",
            "range": "± 144912.2541298354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3660647.5789473685,
            "unit": "ns",
            "range": "± 80717.39628503317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18629,
            "unit": "ns",
            "range": "± 2502.4788093986654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102348.84536082474,
            "unit": "ns",
            "range": "± 16415.883069924108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111112.68421052632,
            "unit": "ns",
            "range": "± 19608.866956136742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127375.5054945055,
            "unit": "ns",
            "range": "± 19599.2004147412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6644.419753086419,
            "unit": "ns",
            "range": "± 578.6266469883135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19343.40625,
            "unit": "ns",
            "range": "± 4288.470569177008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1623003.387755102,
            "unit": "ns",
            "range": "± 146840.25590519008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2967312.149253731,
            "unit": "ns",
            "range": "± 141038.2055742831"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2536308.8333333335,
            "unit": "ns",
            "range": "± 247604.23585476982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7078922.831460674,
            "unit": "ns",
            "range": "± 408558.28700586216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3802848.5945945946,
            "unit": "ns",
            "range": "± 125516.83675606134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3424765.163043478,
            "unit": "ns",
            "range": "± 188807.31537922306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4659533.427835052,
            "unit": "ns",
            "range": "± 271737.5612518618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4723525.142857143,
            "unit": "ns",
            "range": "± 475926.1404453793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8892324.421052631,
            "unit": "ns",
            "range": "± 526655.921008115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6835712.381610577,
            "unit": "ns",
            "range": "± 84089.49694225863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2072906.116908482,
            "unit": "ns",
            "range": "± 34510.6465478846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1317585.5938648898,
            "unit": "ns",
            "range": "± 26635.88161493788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2553978.2573242188,
            "unit": "ns",
            "range": "± 48719.35538453347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 893462.0059244792,
            "unit": "ns",
            "range": "± 15512.155932222739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731435.3051060268,
            "unit": "ns",
            "range": "± 12502.395110620733"
          }
        ]
      }
    ]
  }
}