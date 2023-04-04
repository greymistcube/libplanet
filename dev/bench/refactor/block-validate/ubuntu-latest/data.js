window.BENCHMARK_DATA = {
  "lastUpdate": 1680595513519,
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
          "id": "4522501c5d9593b0aeaa57efde43b2e524ebe847",
          "message": "Removed unnecessary logic",
          "timestamp": "2023-04-04T12:23:14+09:00",
          "tree_id": "329e28668ace483029c1d1ac545049c75aa9c27a",
          "url": "https://github.com/greymistcube/libplanet/commit/4522501c5d9593b0aeaa57efde43b2e524ebe847"
        },
        "date": 1680579555661,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3842318.6904761903,
            "unit": "ns",
            "range": "± 140066.73900323166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4192050.153846154,
            "unit": "ns",
            "range": "± 145841.56743779377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4850366.7272727275,
            "unit": "ns",
            "range": "± 116176.5273801578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5202280.048387097,
            "unit": "ns",
            "range": "± 234579.31751048757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8894599.181818182,
            "unit": "ns",
            "range": "± 216088.59729984132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11227880.233333332,
            "unit": "ns",
            "range": "± 333032.81729023537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26399777,
            "unit": "ns",
            "range": "± 191791.44512092145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65230140.8,
            "unit": "ns",
            "range": "± 291560.9204210037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136599836.23076922,
            "unit": "ns",
            "range": "± 2175861.3233771794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246223087.25,
            "unit": "ns",
            "range": "± 5405035.61890172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1523464.2083333333,
            "unit": "ns",
            "range": "± 117531.34587172607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2958418.126984127,
            "unit": "ns",
            "range": "± 133896.88299468847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2538677.077777778,
            "unit": "ns",
            "range": "± 141061.6037609123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6613823.65,
            "unit": "ns",
            "range": "± 428709.92677836446"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55238.22580645161,
            "unit": "ns",
            "range": "± 3757.0864640645714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6804246.40625,
            "unit": "ns",
            "range": "± 39511.72915873127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2172672.7356770835,
            "unit": "ns",
            "range": "± 21412.330629496104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1545584.1440104167,
            "unit": "ns",
            "range": "± 8608.477091278415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3051426.808854167,
            "unit": "ns",
            "range": "± 16880.366509986427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 962638.7865234375,
            "unit": "ns",
            "range": "± 5321.656600979463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 912048.4655598958,
            "unit": "ns",
            "range": "± 7932.501106320546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 388495.7358490566,
            "unit": "ns",
            "range": "± 16209.5343122864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317593.6034482759,
            "unit": "ns",
            "range": "± 13819.207153406443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269807.6666666667,
            "unit": "ns",
            "range": "± 10449.306908367093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6612617.764705882,
            "unit": "ns",
            "range": "± 135492.54207682863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4645437.90625,
            "unit": "ns",
            "range": "± 141191.60064032854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21403.626373626375,
            "unit": "ns",
            "range": "± 1232.6926772841791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103035.32857142857,
            "unit": "ns",
            "range": "± 4998.276876190023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92149.0306122449,
            "unit": "ns",
            "range": "± 8813.390816221961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 213307.2142857143,
            "unit": "ns",
            "range": "± 19492.8921987784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6914.010416666667,
            "unit": "ns",
            "range": "± 722.887492080296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20377.774193548386,
            "unit": "ns",
            "range": "± 1511.2508217643128"
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
          "id": "af91da6d3bfa9210229b69530940ca3750a8363d",
          "message": "[skip changelog] Renaming and changing signature for consistency; general cleanup",
          "timestamp": "2023-04-04T13:42:50+09:00",
          "tree_id": "b02705f968060a38f88fc31a8ee05a2259b96976",
          "url": "https://github.com/greymistcube/libplanet/commit/af91da6d3bfa9210229b69530940ca3750a8363d"
        },
        "date": 1680584144902,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3280669.564102564,
            "unit": "ns",
            "range": "± 112408.66515152245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3485909.4102564105,
            "unit": "ns",
            "range": "± 119908.43026500153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4241503.142857143,
            "unit": "ns",
            "range": "± 50887.87516137376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4508992.540983606,
            "unit": "ns",
            "range": "± 181645.01748644927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7603680.352941177,
            "unit": "ns",
            "range": "± 136330.28105163446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7723628.285714285,
            "unit": "ns",
            "range": "± 124538.85992142161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20607267.933333334,
            "unit": "ns",
            "range": "± 330259.876251689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52777210.666666664,
            "unit": "ns",
            "range": "± 890903.9356310827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104341511.86666666,
            "unit": "ns",
            "range": "± 1913445.6835822521"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205462270.6,
            "unit": "ns",
            "range": "± 1854707.2016114565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1445992.1368421053,
            "unit": "ns",
            "range": "± 101180.66292345592"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2661990.8285714285,
            "unit": "ns",
            "range": "± 83777.49955387283"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2306497.1621621624,
            "unit": "ns",
            "range": "± 112362.37829013071"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5663205.538461538,
            "unit": "ns",
            "range": "± 152918.91252038925"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47247.3064516129,
            "unit": "ns",
            "range": "± 2029.0791223793437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5960278.232700893,
            "unit": "ns",
            "range": "± 30983.489486178034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1848620.1782552083,
            "unit": "ns",
            "range": "± 8685.941358306987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1364546.5981770833,
            "unit": "ns",
            "range": "± 5038.157967198876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630330.906510417,
            "unit": "ns",
            "range": "± 2438.094167207311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825314.5888671875,
            "unit": "ns",
            "range": "± 1286.3342064802312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761239.2862025669,
            "unit": "ns",
            "range": "± 841.783969877531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336870.42424242425,
            "unit": "ns",
            "range": "± 9803.756945778181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279150.06382978725,
            "unit": "ns",
            "range": "± 10403.958806322873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228756.84615384616,
            "unit": "ns",
            "range": "± 2063.013727784098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5734405.307692308,
            "unit": "ns",
            "range": "± 48050.900382449676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3943604.6428571427,
            "unit": "ns",
            "range": "± 54364.47094678818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19710.397849462366,
            "unit": "ns",
            "range": "± 1478.5677642480869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93895.6129032258,
            "unit": "ns",
            "range": "± 5702.267771670468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78817.69879518072,
            "unit": "ns",
            "range": "± 4204.057954669279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 190264.09473684212,
            "unit": "ns",
            "range": "± 15717.901744050012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6082.1894736842105,
            "unit": "ns",
            "range": "± 550.0432535165593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19604.416666666668,
            "unit": "ns",
            "range": "± 1685.7219329081888"
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
          "id": "e6554b5d179b9c992fffe18c19fff6753cc53236",
          "message": "Renaming and changing signature for consistency; general cleanup",
          "timestamp": "2023-04-04T13:42:29+09:00",
          "tree_id": "b02705f968060a38f88fc31a8ee05a2259b96976",
          "url": "https://github.com/greymistcube/libplanet/commit/e6554b5d179b9c992fffe18c19fff6753cc53236"
        },
        "date": 1680584443176,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4389258.588235294,
            "unit": "ns",
            "range": "± 203425.51637776234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4726765.558139535,
            "unit": "ns",
            "range": "± 167755.79490612488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5765857.7272727275,
            "unit": "ns",
            "range": "± 179982.27409287295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5990184.551724138,
            "unit": "ns",
            "range": "± 172757.67161063378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10744196.538461538,
            "unit": "ns",
            "range": "± 443602.1657701627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10565218,
            "unit": "ns",
            "range": "± 254804.25943671135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27234824.095238097,
            "unit": "ns",
            "range": "± 634822.6353758115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69349463.35714285,
            "unit": "ns",
            "range": "± 695568.8971644398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140689615.95454547,
            "unit": "ns",
            "range": "± 1561485.2399383362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284211175.78571427,
            "unit": "ns",
            "range": "± 4108208.308938042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1848822.8617021276,
            "unit": "ns",
            "range": "± 148770.07899335923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3674355.1714285715,
            "unit": "ns",
            "range": "± 118443.90337040066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2972283.466666667,
            "unit": "ns",
            "range": "± 182545.5780273254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7751913.947368421,
            "unit": "ns",
            "range": "± 260655.16813339002"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 88700.95652173914,
            "unit": "ns",
            "range": "± 7947.087523613855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7732052.454166667,
            "unit": "ns",
            "range": "± 139966.01446985838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2340910.847916667,
            "unit": "ns",
            "range": "± 22815.344724599254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1718938.4533854167,
            "unit": "ns",
            "range": "± 15552.588757036738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3302257.33984375,
            "unit": "ns",
            "range": "± 26198.344102062947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1088663.6459263393,
            "unit": "ns",
            "range": "± 18407.694481758226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 989240.9148763021,
            "unit": "ns",
            "range": "± 6748.112538893722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 467267.36666666664,
            "unit": "ns",
            "range": "± 13577.808648250488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 384418.2340425532,
            "unit": "ns",
            "range": "± 24118.23292285277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 371855.2,
            "unit": "ns",
            "range": "± 18735.01154148189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7417708.230769231,
            "unit": "ns",
            "range": "± 111630.6023701639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5141752.708333333,
            "unit": "ns",
            "range": "± 130734.56245633886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 36194.73469387755,
            "unit": "ns",
            "range": "± 9072.893544459408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 141210.4516129032,
            "unit": "ns",
            "range": "± 15954.728609763946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 132824.03191489363,
            "unit": "ns",
            "range": "± 11910.254462628493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 275078.23913043475,
            "unit": "ns",
            "range": "± 24842.03117253807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10761.872093023256,
            "unit": "ns",
            "range": "± 1123.263101509187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30044.81818181818,
            "unit": "ns",
            "range": "± 2213.1889954950893"
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
          "id": "cff89a486b9058e1f22408e4adbb59472fb6452c",
          "message": "Suggestions",
          "timestamp": "2023-04-04T14:17:24+09:00",
          "tree_id": "608dac6096fb5ee067136aa0e8af45f75aecbe5e",
          "url": "https://github.com/greymistcube/libplanet/commit/cff89a486b9058e1f22408e4adbb59472fb6452c"
        },
        "date": 1680586316253,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3759598.4,
            "unit": "ns",
            "range": "± 62609.74757267662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4021399.466666667,
            "unit": "ns",
            "range": "± 57245.29345952091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4497723.222222222,
            "unit": "ns",
            "range": "± 82456.77755652677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5058604.5,
            "unit": "ns",
            "range": "± 86132.72959151251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8226313.692307692,
            "unit": "ns",
            "range": "± 126461.47697117398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8602570.666666666,
            "unit": "ns",
            "range": "± 44752.90862641008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22597415.733333334,
            "unit": "ns",
            "range": "± 236563.45862956299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55711565.93333333,
            "unit": "ns",
            "range": "± 132541.5647509795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112287238.64285715,
            "unit": "ns",
            "range": "± 301695.4921678498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223715579,
            "unit": "ns",
            "range": "± 356275.7228674363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1524760.2043010753,
            "unit": "ns",
            "range": "± 98261.24005000308"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2877635.1016949154,
            "unit": "ns",
            "range": "± 125777.73324176962"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2448412.1951219514,
            "unit": "ns",
            "range": "± 123031.72997755538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6087837.904761905,
            "unit": "ns",
            "range": "± 220586.05032656447"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57622.489583333336,
            "unit": "ns",
            "range": "± 4843.233515338785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6186919.111842105,
            "unit": "ns",
            "range": "± 134576.68185154366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1875710.5354166667,
            "unit": "ns",
            "range": "± 7223.737946318628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361506.8996930805,
            "unit": "ns",
            "range": "± 4959.754066313573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2668724.697395833,
            "unit": "ns",
            "range": "± 29851.329509026225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835017.2969401042,
            "unit": "ns",
            "range": "± 2030.6276227407845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763696.3326171875,
            "unit": "ns",
            "range": "± 887.3724047898485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 359339.31707317074,
            "unit": "ns",
            "range": "± 12756.46383885249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314730.3214285714,
            "unit": "ns",
            "range": "± 8816.966124104021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267538.09523809527,
            "unit": "ns",
            "range": "± 9709.023207781773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5919528.133333334,
            "unit": "ns",
            "range": "± 52864.64467711947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4247630.615384615,
            "unit": "ns",
            "range": "± 52248.83242800497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24499.536842105263,
            "unit": "ns",
            "range": "± 2263.377338114891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104437.11,
            "unit": "ns",
            "range": "± 12339.805500730494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119617.43589743589,
            "unit": "ns",
            "range": "± 6161.681729009032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 216620.306122449,
            "unit": "ns",
            "range": "± 27787.32960849787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10863.979797979799,
            "unit": "ns",
            "range": "± 2019.0702698741704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28052.916666666668,
            "unit": "ns",
            "range": "± 2153.6159637452183"
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
          "id": "74e4d416e7ffdbacf023f60149719f43311df8ca",
          "message": "Separate nonce check for genesis",
          "timestamp": "2023-04-03T18:14:20+09:00",
          "tree_id": "b52734325a8d6def243b06c8dde39849f103fd77",
          "url": "https://github.com/greymistcube/libplanet/commit/74e4d416e7ffdbacf023f60149719f43311df8ca"
        },
        "date": 1680590272400,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3268184.5588235296,
            "unit": "ns",
            "range": "± 103826.30745192904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3474328.6129032257,
            "unit": "ns",
            "range": "± 104395.66620688091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4179146,
            "unit": "ns",
            "range": "± 79580.46387818223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4388978,
            "unit": "ns",
            "range": "± 123142.7298122504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7453084.055555556,
            "unit": "ns",
            "range": "± 149045.87395258833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7773160.066666666,
            "unit": "ns",
            "range": "± 76896.08231472122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21266319.214285713,
            "unit": "ns",
            "range": "± 226351.6840379075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51593589.192307696,
            "unit": "ns",
            "range": "± 1311438.2245650163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99182998.35714285,
            "unit": "ns",
            "range": "± 1064115.5065480878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200493328.2142857,
            "unit": "ns",
            "range": "± 2058838.898681905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1383865.8585858585,
            "unit": "ns",
            "range": "± 100768.38384338794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2649630.888888889,
            "unit": "ns",
            "range": "± 87749.35563809905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2198945.3278688523,
            "unit": "ns",
            "range": "± 96595.64487607112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5935499.92,
            "unit": "ns",
            "range": "± 410282.4203833129"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49212.880597014926,
            "unit": "ns",
            "range": "± 2340.695147473438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5818515.746875,
            "unit": "ns",
            "range": "± 27336.301407204333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1855159.2702287945,
            "unit": "ns",
            "range": "± 5904.4854041560375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1325158.9619140625,
            "unit": "ns",
            "range": "± 3843.3637562256877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2626829.0424479167,
            "unit": "ns",
            "range": "± 7296.758365896702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807583.3842447917,
            "unit": "ns",
            "range": "± 2460.600949843322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756238.0854817708,
            "unit": "ns",
            "range": "± 2078.4171304514052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324016.2413793103,
            "unit": "ns",
            "range": "± 9242.833442554183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272123.5625,
            "unit": "ns",
            "range": "± 8371.13469757834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231688.84615384616,
            "unit": "ns",
            "range": "± 1719.5013252953042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5656383.428571428,
            "unit": "ns",
            "range": "± 45102.35598436804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3920837.0714285714,
            "unit": "ns",
            "range": "± 61655.9323672218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17736.22105263158,
            "unit": "ns",
            "range": "± 1322.386641394757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84178.37681159421,
            "unit": "ns",
            "range": "± 4072.5178730747407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75955.37878787878,
            "unit": "ns",
            "range": "± 2146.571579833406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 183275.587628866,
            "unit": "ns",
            "range": "± 17013.864174887258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5666.225806451613,
            "unit": "ns",
            "range": "± 489.9614476633376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17451.06349206349,
            "unit": "ns",
            "range": "± 819.483961798932"
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
          "id": "609e7adb2a7a9a9f67d6a7686cf61066542b5380",
          "message": "Changed to throw exceptions instead of returning for validation\n\nCleanup",
          "timestamp": "2023-04-04T15:38:40+09:00",
          "tree_id": "b63ea20cd158d6be05c640962054866b6b5ebb27",
          "url": "https://github.com/greymistcube/libplanet/commit/609e7adb2a7a9a9f67d6a7686cf61066542b5380"
        },
        "date": 1680591203285,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3282923,
            "unit": "ns",
            "range": "± 71933.4512046414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3440285.3194444445,
            "unit": "ns",
            "range": "± 169369.0542233207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4170066.4545454546,
            "unit": "ns",
            "range": "± 98442.43559356438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4543367.304347826,
            "unit": "ns",
            "range": "± 114248.9223535549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7474127.523809524,
            "unit": "ns",
            "range": "± 172822.54431457113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7524382.076923077,
            "unit": "ns",
            "range": "± 30644.95010998696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20156436.384615384,
            "unit": "ns",
            "range": "± 155058.65922586547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51185721.21428572,
            "unit": "ns",
            "range": "± 594331.0835131153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101347205.53333333,
            "unit": "ns",
            "range": "± 1196876.5102325343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204285395.2222222,
            "unit": "ns",
            "range": "± 3900673.6350660156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1351582.1868131869,
            "unit": "ns",
            "range": "± 82066.8164639727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2643544.6428571427,
            "unit": "ns",
            "range": "± 45489.031522583966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2271861.5423728814,
            "unit": "ns",
            "range": "± 100687.90980606635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5599821.5121951215,
            "unit": "ns",
            "range": "± 201535.55569726674"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48639.514285714286,
            "unit": "ns",
            "range": "± 2354.107651133714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5866070.299665178,
            "unit": "ns",
            "range": "± 28345.18163199547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1858134.4701822917,
            "unit": "ns",
            "range": "± 4941.916430605159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1345210.259375,
            "unit": "ns",
            "range": "± 5842.305880010714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2598527.121394231,
            "unit": "ns",
            "range": "± 11967.170300928918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825847.8007161458,
            "unit": "ns",
            "range": "± 3442.6219810660236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760988.9912760417,
            "unit": "ns",
            "range": "± 2082.362823476291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330057.46153846156,
            "unit": "ns",
            "range": "± 11421.491657227323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272915.3,
            "unit": "ns",
            "range": "± 7072.457569990105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231296.6923076923,
            "unit": "ns",
            "range": "± 2656.8607849808827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5639029,
            "unit": "ns",
            "range": "± 59971.246090875145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3969204.214285714,
            "unit": "ns",
            "range": "± 54080.71963730708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18251.445652173912,
            "unit": "ns",
            "range": "± 1123.4035839352086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86922.3908045977,
            "unit": "ns",
            "range": "± 4771.777315893167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74237.07142857143,
            "unit": "ns",
            "range": "± 1298.404018210624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 180691.80208333334,
            "unit": "ns",
            "range": "± 14917.903758214961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5872.288659793814,
            "unit": "ns",
            "range": "± 514.3515731555218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17438.21052631579,
            "unit": "ns",
            "range": "± 1220.5724406469046"
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
          "id": "bcc4772395a25b3ff32dd441fc2d429e4876f7e9",
          "message": "Code reorganization and renaming for consistency",
          "timestamp": "2023-04-04T16:00:01+09:00",
          "tree_id": "e3ae7aa6eb72b7c46d47c8186f88e83b660a83fe",
          "url": "https://github.com/greymistcube/libplanet/commit/bcc4772395a25b3ff32dd441fc2d429e4876f7e9"
        },
        "date": 1680592619310,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3472169.4054054054,
            "unit": "ns",
            "range": "± 116813.17821834132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3719893.5757575757,
            "unit": "ns",
            "range": "± 114748.84624665903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4286620.7894736845,
            "unit": "ns",
            "range": "± 92646.90404048345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4736577.764705882,
            "unit": "ns",
            "range": "± 149934.28990688676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7719602.083333333,
            "unit": "ns",
            "range": "± 194840.94418221965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7804292.466666667,
            "unit": "ns",
            "range": "± 70120.74535386052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21979983,
            "unit": "ns",
            "range": "± 199098.4709844185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56037533,
            "unit": "ns",
            "range": "± 342736.31422338163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110808966.8,
            "unit": "ns",
            "range": "± 445749.9195841927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213161892.26666668,
            "unit": "ns",
            "range": "± 2586180.8575378777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1472552.2857142857,
            "unit": "ns",
            "range": "± 138269.35226138693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2692453.75,
            "unit": "ns",
            "range": "± 81850.53021642363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2284420.196969697,
            "unit": "ns",
            "range": "± 106383.64396483854"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5487142.909090909,
            "unit": "ns",
            "range": "± 129869.96097778845"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50473.47692307692,
            "unit": "ns",
            "range": "± 2354.7444600455874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5926243.902901785,
            "unit": "ns",
            "range": "± 30319.72494920154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1890939.90234375,
            "unit": "ns",
            "range": "± 1344.9888439292492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1376105.0884486607,
            "unit": "ns",
            "range": "± 2114.8840625452835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2647269.6414620536,
            "unit": "ns",
            "range": "± 2438.883505498482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833798.8241536458,
            "unit": "ns",
            "range": "± 2117.976943334859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766023.2833333333,
            "unit": "ns",
            "range": "± 506.5437974846524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348165.2,
            "unit": "ns",
            "range": "± 11230.262432374411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292183.2727272727,
            "unit": "ns",
            "range": "± 7062.033419442025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247482.5,
            "unit": "ns",
            "range": "± 7039.913399496743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5919904.6,
            "unit": "ns",
            "range": "± 83070.29575933178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4224098.533333333,
            "unit": "ns",
            "range": "± 69098.15689175866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20988.329896907217,
            "unit": "ns",
            "range": "± 1917.4604989502038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96480.39726027397,
            "unit": "ns",
            "range": "± 4612.682630349255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85538.81609195402,
            "unit": "ns",
            "range": "± 4671.984393711828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 200518.05102040817,
            "unit": "ns",
            "range": "± 17370.83512427931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7601.20618556701,
            "unit": "ns",
            "range": "± 926.9836606136452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19969.78125,
            "unit": "ns",
            "range": "± 1400.6797575547682"
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
          "id": "a2dbcf82e0321da87a527ebf0b627e86971605d6",
          "message": "Changed to throw exceptions instead of returning for validation",
          "timestamp": "2023-04-04T15:57:07+09:00",
          "tree_id": "10d9bb6df7318e2b51b42cb3deb90bfb48f3159a",
          "url": "https://github.com/greymistcube/libplanet/commit/a2dbcf82e0321da87a527ebf0b627e86971605d6"
        },
        "date": 1680592867892,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4073290.7422680412,
            "unit": "ns",
            "range": "± 263384.9183603992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4389183.222222222,
            "unit": "ns",
            "range": "± 209068.61542411952"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5376774.857142857,
            "unit": "ns",
            "range": "± 260454.46588275104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5418881.620689655,
            "unit": "ns",
            "range": "± 296583.46303815267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9967631.35135135,
            "unit": "ns",
            "range": "± 337179.4301756374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9700735.76119403,
            "unit": "ns",
            "range": "± 447554.0082202401"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26112100.8,
            "unit": "ns",
            "range": "± 679450.122654403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64908354.15151515,
            "unit": "ns",
            "range": "± 1960583.711966224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133400297,
            "unit": "ns",
            "range": "± 3867967.3213835177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261646064.86363637,
            "unit": "ns",
            "range": "± 5531280.238665706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1794237.9468085107,
            "unit": "ns",
            "range": "± 164125.698667857"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3443641.950819672,
            "unit": "ns",
            "range": "± 154478.09032205032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2795165.204819277,
            "unit": "ns",
            "range": "± 148857.53081146686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7630242.670212766,
            "unit": "ns",
            "range": "± 445782.3123736418"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66599.20212765958,
            "unit": "ns",
            "range": "± 12585.194221936597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7392032.6578125,
            "unit": "ns",
            "range": "± 138288.7672783739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2268374.275390625,
            "unit": "ns",
            "range": "± 18543.941151080533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1672676.1704427083,
            "unit": "ns",
            "range": "± 18279.121892999246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3201732.389229911,
            "unit": "ns",
            "range": "± 22832.948461690627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1015722.1515625,
            "unit": "ns",
            "range": "± 11541.234059909479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 965934.292578125,
            "unit": "ns",
            "range": "± 7626.330366739803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 440243.44680851063,
            "unit": "ns",
            "range": "± 26204.51342869725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 361417.1041666667,
            "unit": "ns",
            "range": "± 30367.8291945446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305480.6804123711,
            "unit": "ns",
            "range": "± 24674.592148582382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6813422.48,
            "unit": "ns",
            "range": "± 178400.49647355246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5000089,
            "unit": "ns",
            "range": "± 113541.10747742423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26725.69387755102,
            "unit": "ns",
            "range": "± 7641.943214319899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112945,
            "unit": "ns",
            "range": "± 14529.123595350808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107951.101010101,
            "unit": "ns",
            "range": "± 16148.693489513764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 242876.38144329897,
            "unit": "ns",
            "range": "± 22614.111427492982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10991.484848484848,
            "unit": "ns",
            "range": "± 5573.284881895783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23644.98979591837,
            "unit": "ns",
            "range": "± 7143.929474742943"
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
          "id": "050416c796e9af50793ff1c9074dc9135238e031",
          "message": "Extract policy validation from internal method",
          "timestamp": "2023-04-04T16:10:28+09:00",
          "tree_id": "19c43852e595bc3320b48143ad2b15c43fe98b13",
          "url": "https://github.com/greymistcube/libplanet/commit/050416c796e9af50793ff1c9074dc9135238e031"
        },
        "date": 1680593046355,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3331577.1304347827,
            "unit": "ns",
            "range": "± 127846.84430705162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3533442.717391304,
            "unit": "ns",
            "range": "± 134268.11717185102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4300087.761904762,
            "unit": "ns",
            "range": "± 101069.74401318366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4503792.411764706,
            "unit": "ns",
            "range": "± 176944.87707070546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7649955.8,
            "unit": "ns",
            "range": "± 138341.9780036338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7675050.285714285,
            "unit": "ns",
            "range": "± 62778.90422798039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21218163.533333335,
            "unit": "ns",
            "range": "± 212898.71230163708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52418610.53333333,
            "unit": "ns",
            "range": "± 955772.3430197223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103433297.92857143,
            "unit": "ns",
            "range": "± 1357638.422438161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210239203.14285713,
            "unit": "ns",
            "range": "± 2483696.751474112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1393612.1123595505,
            "unit": "ns",
            "range": "± 77097.43821832306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2636227.6666666665,
            "unit": "ns",
            "range": "± 69377.9707771411"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2262793.9404761903,
            "unit": "ns",
            "range": "± 118251.2202830998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5727610.510204081,
            "unit": "ns",
            "range": "± 227334.21314389768"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50450.8,
            "unit": "ns",
            "range": "± 2468.429554559494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5956112.320833334,
            "unit": "ns",
            "range": "± 40135.465879902855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1845225.136328125,
            "unit": "ns",
            "range": "± 6344.375982766962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1342732.3615885417,
            "unit": "ns",
            "range": "± 9974.392449709221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2611888.740625,
            "unit": "ns",
            "range": "± 7302.89966382572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816788.8151692708,
            "unit": "ns",
            "range": "± 2491.365332984325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749676.803141276,
            "unit": "ns",
            "range": "± 785.7369595085087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340612.5,
            "unit": "ns",
            "range": "± 9332.65083303927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282394.23255813954,
            "unit": "ns",
            "range": "± 10423.857157495353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234682.26666666666,
            "unit": "ns",
            "range": "± 4084.933667352099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5666689.214285715,
            "unit": "ns",
            "range": "± 50419.45359325959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3959151.0714285714,
            "unit": "ns",
            "range": "± 33848.63569904721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21070.432989690722,
            "unit": "ns",
            "range": "± 2222.928421902141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93139.50515463918,
            "unit": "ns",
            "range": "± 5733.644874270118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80412.43157894736,
            "unit": "ns",
            "range": "± 5678.287687009083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 203330.40625,
            "unit": "ns",
            "range": "± 17623.241581011633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6083.567010309278,
            "unit": "ns",
            "range": "± 885.7130591037994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18994.894736842107,
            "unit": "ns",
            "range": "± 1671.025735911445"
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
          "id": "efbfa4d05e76436dbfb9df3d89430b8630d13e62",
          "message": "[skip changelog] Extract policy validation from internal method",
          "timestamp": "2023-04-04T16:11:20+09:00",
          "tree_id": "19c43852e595bc3320b48143ad2b15c43fe98b13",
          "url": "https://github.com/greymistcube/libplanet/commit/efbfa4d05e76436dbfb9df3d89430b8630d13e62"
        },
        "date": 1680593132964,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3669107.933333333,
            "unit": "ns",
            "range": "± 38690.52598960605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3827687.217391304,
            "unit": "ns",
            "range": "± 93792.53791405627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4434917.117647059,
            "unit": "ns",
            "range": "± 89585.27115330005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4993060.533333333,
            "unit": "ns",
            "range": "± 92132.57081577508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8153977.448275862,
            "unit": "ns",
            "range": "± 230528.09605208432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8372174.6,
            "unit": "ns",
            "range": "± 138362.33859213899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22088338.133333333,
            "unit": "ns",
            "range": "± 218437.40841056462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56020835.733333334,
            "unit": "ns",
            "range": "± 233480.6943684658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110804927.06666666,
            "unit": "ns",
            "range": "± 521688.0071952511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223206312.6,
            "unit": "ns",
            "range": "± 856935.4379535752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1477260.0860215053,
            "unit": "ns",
            "range": "± 101235.33641768181"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2702531.724137931,
            "unit": "ns",
            "range": "± 79142.2289935281"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2365768.573170732,
            "unit": "ns",
            "range": "± 122257.63185145818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5707059.518518519,
            "unit": "ns",
            "range": "± 158874.04180583058"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52729.35555555556,
            "unit": "ns",
            "range": "± 2961.4900679761868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5930782.262276785,
            "unit": "ns",
            "range": "± 21871.41686471425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1864998.621484375,
            "unit": "ns",
            "range": "± 3120.7201348080134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1376382.246875,
            "unit": "ns",
            "range": "± 2450.101741919878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2635518.9677083334,
            "unit": "ns",
            "range": "± 2075.3460333787275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832792.5048828125,
            "unit": "ns",
            "range": "± 325.8123611501461"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770946.4487630208,
            "unit": "ns",
            "range": "± 290.68141391431783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357900.26470588235,
            "unit": "ns",
            "range": "± 11041.74304506594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294887.95081967214,
            "unit": "ns",
            "range": "± 13197.673407872855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253318.63636363635,
            "unit": "ns",
            "range": "± 7944.904411862761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5849408.785714285,
            "unit": "ns",
            "range": "± 35508.07152265865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4108907.466666667,
            "unit": "ns",
            "range": "± 45923.93730299618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22101.22680412371,
            "unit": "ns",
            "range": "± 1716.6751810376716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100261.31868131868,
            "unit": "ns",
            "range": "± 5616.190802549993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94033.44897959183,
            "unit": "ns",
            "range": "± 6379.793352375886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 210271.6701030928,
            "unit": "ns",
            "range": "± 18050.843821297323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7790.877551020408,
            "unit": "ns",
            "range": "± 821.6067394661566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22088.6,
            "unit": "ns",
            "range": "± 1924.8848288288116"
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
          "id": "e69cbf5dc50d60c6f48fa63a3ffc0d23a8f6f1f0",
          "message": "Make validate methods throw exceptions instead of returning",
          "timestamp": "2023-04-04T16:40:39+09:00",
          "tree_id": "5d3d0c4d2af044b4fcc2bd04951becd21e60a71c",
          "url": "https://github.com/greymistcube/libplanet/commit/e69cbf5dc50d60c6f48fa63a3ffc0d23a8f6f1f0"
        },
        "date": 1680595254016,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4546389.20212766,
            "unit": "ns",
            "range": "± 305903.48224118224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4801561.362637362,
            "unit": "ns",
            "range": "± 347516.25307856756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5955700.927536231,
            "unit": "ns",
            "range": "± 287012.84522014396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6178208.35106383,
            "unit": "ns",
            "range": "± 375873.87155338604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10748759.757894738,
            "unit": "ns",
            "range": "± 741119.4757521366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10828502.89010989,
            "unit": "ns",
            "range": "± 728966.0994529541"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28955521.64516129,
            "unit": "ns",
            "range": "± 1695551.013537459"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72882706.08695652,
            "unit": "ns",
            "range": "± 2800160.3479733705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 145838281.6956522,
            "unit": "ns",
            "range": "± 5526086.979948526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 300381838.46666664,
            "unit": "ns",
            "range": "± 8724784.25389747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1892904.888888889,
            "unit": "ns",
            "range": "± 197008.6344154556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3829166.714285714,
            "unit": "ns",
            "range": "± 323009.5741171462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3019286.887755102,
            "unit": "ns",
            "range": "± 302527.7492461747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8220842.833333333,
            "unit": "ns",
            "range": "± 490501.3087041218"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78716.40217391304,
            "unit": "ns",
            "range": "± 13018.657603743623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7803406.063322368,
            "unit": "ns",
            "range": "± 171437.91005160435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2480690.41015625,
            "unit": "ns",
            "range": "± 49916.87223883489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1747863.9740513393,
            "unit": "ns",
            "range": "± 16001.50106824383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3404468.3518066406,
            "unit": "ns",
            "range": "± 66218.4060974913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1110970.791819853,
            "unit": "ns",
            "range": "± 22417.36147553433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1025424.80859375,
            "unit": "ns",
            "range": "± 17740.382796588514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 486957.72631578945,
            "unit": "ns",
            "range": "± 49257.25937501056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 379549.93684210523,
            "unit": "ns",
            "range": "± 46256.53780331122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 361857.91489361704,
            "unit": "ns",
            "range": "± 49236.42130843281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7463024.296703297,
            "unit": "ns",
            "range": "± 416804.838140759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5299481.154639175,
            "unit": "ns",
            "range": "± 376886.08279755595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30793.101123595505,
            "unit": "ns",
            "range": "± 4036.5778965180166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 144654.02197802198,
            "unit": "ns",
            "range": "± 21664.311183745915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 133404.33333333334,
            "unit": "ns",
            "range": "± 18827.8067821125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 283642.6808510638,
            "unit": "ns",
            "range": "± 32511.441849006784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9101.116279069767,
            "unit": "ns",
            "range": "± 1335.600754175964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28829.827956989247,
            "unit": "ns",
            "range": "± 6051.001788463834"
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
          "id": "480aa31a0236c07694ec54dabd4afa2865ad5724",
          "message": "Make validate methods throw exceptions instead of returning",
          "timestamp": "2023-04-04T16:52:06+09:00",
          "tree_id": "5503b6b48e0c4ca4a169424b9b53cb78ec9d22db",
          "url": "https://github.com/greymistcube/libplanet/commit/480aa31a0236c07694ec54dabd4afa2865ad5724"
        },
        "date": 1680595506393,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3359406,
            "unit": "ns",
            "range": "± 51601.245832136374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3509651.172413793,
            "unit": "ns",
            "range": "± 81474.53660810184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4372383.84,
            "unit": "ns",
            "range": "± 110678.87001203075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4446297.552631579,
            "unit": "ns",
            "range": "± 137342.3191468394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7696194.857142857,
            "unit": "ns",
            "range": "± 175593.89088299335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7599373.666666667,
            "unit": "ns",
            "range": "± 32119.77940163232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19616942.35714286,
            "unit": "ns",
            "range": "± 103540.6420557849"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50511824,
            "unit": "ns",
            "range": "± 227404.28251307344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101091928.2,
            "unit": "ns",
            "range": "± 312641.879402936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203470031.75,
            "unit": "ns",
            "range": "± 279989.05870510044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1402386.5425531915,
            "unit": "ns",
            "range": "± 91598.47659127446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2645363.617647059,
            "unit": "ns",
            "range": "± 85321.6619945723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2244598.9375,
            "unit": "ns",
            "range": "± 131092.06319704946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5584298.384615385,
            "unit": "ns",
            "range": "± 141553.2716824523"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45782.63953488372,
            "unit": "ns",
            "range": "± 2465.576386079952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5900751.0703125,
            "unit": "ns",
            "range": "± 8954.110352503116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1913629.9345703125,
            "unit": "ns",
            "range": "± 5933.108747726941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358095.8126395089,
            "unit": "ns",
            "range": "± 821.0987169912249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2555117.7747395835,
            "unit": "ns",
            "range": "± 2240.0017555919244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802028.1985212053,
            "unit": "ns",
            "range": "± 1186.0163454540257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742489.9714192708,
            "unit": "ns",
            "range": "± 2228.8228332301596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339404.8333333333,
            "unit": "ns",
            "range": "± 8576.589611396761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274121.1724137931,
            "unit": "ns",
            "range": "± 7793.811221865011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246039.38888888888,
            "unit": "ns",
            "range": "± 8186.770450908773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5674230.133333334,
            "unit": "ns",
            "range": "± 27808.650660403877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4014947.066666667,
            "unit": "ns",
            "range": "± 44594.62004782106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20893.845360824744,
            "unit": "ns",
            "range": "± 1979.1852508261143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94652.28571428571,
            "unit": "ns",
            "range": "± 6951.534067880789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81997.2463768116,
            "unit": "ns",
            "range": "± 3956.2119560694637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 213186.72727272726,
            "unit": "ns",
            "range": "± 5142.836591589529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5559.385416666667,
            "unit": "ns",
            "range": "± 661.5042247514638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21184.60824742268,
            "unit": "ns",
            "range": "± 1565.9017207660056"
          }
        ]
      }
    ]
  }
}