window.BENCHMARK_DATA = {
  "lastUpdate": 1700196154452,
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
          "id": "230112d213d64abb0a6d51bbb0b61790bd7cd397",
          "message": "Remove unnecessary extensions",
          "timestamp": "2023-11-16T22:21:59+09:00",
          "tree_id": "4940d84801c8aca15903cc63aa02253da0eac664",
          "url": "https://github.com/greymistcube/libplanet/commit/230112d213d64abb0a6d51bbb0b61790bd7cd397"
        },
        "date": 1700146955313,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5863582.730769231,
            "unit": "ns",
            "range": "± 27224.866865771342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14835197.538461538,
            "unit": "ns",
            "range": "± 108999.0669521345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37847347.92307692,
            "unit": "ns",
            "range": "± 191593.7384965305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76671084.71428572,
            "unit": "ns",
            "range": "± 714406.4303863817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152841264.6153846,
            "unit": "ns",
            "range": "± 608801.9056757486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 943331.9777777778,
            "unit": "ns",
            "range": "± 55472.872415460624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1868152.4444444445,
            "unit": "ns",
            "range": "± 51889.98037190634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1420411.17,
            "unit": "ns",
            "range": "± 144742.51822739988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10729591.587628866,
            "unit": "ns",
            "range": "± 963387.6563721286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2448753.4166666665,
            "unit": "ns",
            "range": "± 95127.37666733972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2622568.121212121,
            "unit": "ns",
            "range": "± 81072.77651698102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3292578.214285714,
            "unit": "ns",
            "range": "± 38983.3578282571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3001483.9545454546,
            "unit": "ns",
            "range": "± 112331.30380345424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11746676.125,
            "unit": "ns",
            "range": "± 973724.3412250367"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41944.1947368421,
            "unit": "ns",
            "range": "± 4748.362468180722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3660864.470377604,
            "unit": "ns",
            "range": "± 11326.169670850346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1157516.822265625,
            "unit": "ns",
            "range": "± 5584.131814726611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733346.3897235577,
            "unit": "ns",
            "range": "± 1669.8497483594854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1956014.5829427084,
            "unit": "ns",
            "range": "± 29961.884090989748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618885.2607421875,
            "unit": "ns",
            "range": "± 9544.510688913111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571209.9719050481,
            "unit": "ns",
            "range": "± 1764.3557320934947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205820.37931034484,
            "unit": "ns",
            "range": "± 11271.184628771105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199689.69444444444,
            "unit": "ns",
            "range": "± 9386.136392797307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167136.03846153847,
            "unit": "ns",
            "range": "± 4385.010882365235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3097781.5384615385,
            "unit": "ns",
            "range": "± 36267.72117327699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3108130.0714285714,
            "unit": "ns",
            "range": "± 32603.93473768344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14337.247311827958,
            "unit": "ns",
            "range": "± 1882.9847874879852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72097.13265306123,
            "unit": "ns",
            "range": "± 13526.89540781529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60691.17894736842,
            "unit": "ns",
            "range": "± 7377.995403208438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75137.3947368421,
            "unit": "ns",
            "range": "± 18023.06389252139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3541.4942528735633,
            "unit": "ns",
            "range": "± 795.7519023432275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13979.947368421053,
            "unit": "ns",
            "range": "± 1846.9548795213384"
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
          "id": "92952511538ebfcb54e8bb01725dbd27eecef617",
          "message": "Add missing cache",
          "timestamp": "2023-11-17T09:43:58+09:00",
          "tree_id": "79f699a8f5975c1c98e0075549838a2014366aa1",
          "url": "https://github.com/greymistcube/libplanet/commit/92952511538ebfcb54e8bb01725dbd27eecef617"
        },
        "date": 1700183430391,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6020727.423076923,
            "unit": "ns",
            "range": "± 55797.39962349133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15169303.2,
            "unit": "ns",
            "range": "± 110125.89024981494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37766746.15384615,
            "unit": "ns",
            "range": "± 250127.52070588787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76062486,
            "unit": "ns",
            "range": "± 412677.7802161801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154406213.84615386,
            "unit": "ns",
            "range": "± 619119.2107382398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 964467.3157894737,
            "unit": "ns",
            "range": "± 81355.4360989889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1887955.078125,
            "unit": "ns",
            "range": "± 82441.53322055397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1325113.03125,
            "unit": "ns",
            "range": "± 84857.6714147008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10338930.591836736,
            "unit": "ns",
            "range": "± 1123164.077416034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2432589.919354839,
            "unit": "ns",
            "range": "± 73594.25625901982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2546385.641025641,
            "unit": "ns",
            "range": "± 80782.45943190728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3139118.3235294116,
            "unit": "ns",
            "range": "± 126463.26270735006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2995765.413043478,
            "unit": "ns",
            "range": "± 104754.05868129112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11531423.6010101,
            "unit": "ns",
            "range": "± 1020799.7300639749"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43278.242268041235,
            "unit": "ns",
            "range": "± 5626.164657721899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3666693.8515625,
            "unit": "ns",
            "range": "± 50603.153196689185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1139315.5057091345,
            "unit": "ns",
            "range": "± 2101.5773085033766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729666.2722981771,
            "unit": "ns",
            "range": "± 1763.9403121316334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944645.842075893,
            "unit": "ns",
            "range": "± 3720.45282415695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619679.0222167969,
            "unit": "ns",
            "range": "± 2310.169045057458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578313.6680501302,
            "unit": "ns",
            "range": "± 772.9786866803545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206848.16091954024,
            "unit": "ns",
            "range": "± 14028.547890900618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213328.73469387754,
            "unit": "ns",
            "range": "± 20196.601592536554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167930.1875,
            "unit": "ns",
            "range": "± 5069.316346587002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3139875.785714286,
            "unit": "ns",
            "range": "± 27091.645346230525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2808913.9,
            "unit": "ns",
            "range": "± 42193.43026518296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15223.787878787878,
            "unit": "ns",
            "range": "± 3442.172908512365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68379.48958333333,
            "unit": "ns",
            "range": "± 6292.746874056112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92155.9052631579,
            "unit": "ns",
            "range": "± 6217.685291533054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75742.81818181818,
            "unit": "ns",
            "range": "± 17521.172159537608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3121.098901098901,
            "unit": "ns",
            "range": "± 786.1450820999203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12072.380434782608,
            "unit": "ns",
            "range": "± 1368.8594421489186"
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
          "id": "7d64d9aaf51665b1cf3739ac1fc0e006ba96a6b7",
          "message": "Remove caching while writing",
          "timestamp": "2023-11-17T13:22:50+09:00",
          "tree_id": "161d53684b30dcad10be36fda99fc1883bc401b4",
          "url": "https://github.com/greymistcube/libplanet/commit/7d64d9aaf51665b1cf3739ac1fc0e006ba96a6b7"
        },
        "date": 1700196148454,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5709082.428571428,
            "unit": "ns",
            "range": "± 27230.96315555366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15159886.6,
            "unit": "ns",
            "range": "± 47184.85169264753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38290246.14285714,
            "unit": "ns",
            "range": "± 227596.56713803147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77741717.35714285,
            "unit": "ns",
            "range": "± 815130.2468461813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154496920.53333333,
            "unit": "ns",
            "range": "± 852666.3930191378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 991163.4615384615,
            "unit": "ns",
            "range": "± 87138.09502626758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1947189.4104477612,
            "unit": "ns",
            "range": "± 92206.59263236361"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1315149.1666666667,
            "unit": "ns",
            "range": "± 81508.20785684769"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9365426.212765958,
            "unit": "ns",
            "range": "± 1014868.7917161775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2528674.5,
            "unit": "ns",
            "range": "± 36521.854335662974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2639264.0625,
            "unit": "ns",
            "range": "± 49631.18846245608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3205067.8636363638,
            "unit": "ns",
            "range": "± 76131.76813625143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3009058.111111111,
            "unit": "ns",
            "range": "± 62235.691108492036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10596686.741935484,
            "unit": "ns",
            "range": "± 777794.415793074"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39654.197916666664,
            "unit": "ns",
            "range": "± 5977.250455060582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3674896.681640625,
            "unit": "ns",
            "range": "± 42585.53070245973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1174740.628797743,
            "unit": "ns",
            "range": "± 24125.599179587556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736311.9261067709,
            "unit": "ns",
            "range": "± 964.4172148313031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944103.410435268,
            "unit": "ns",
            "range": "± 2364.4731903606257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614944.4814453125,
            "unit": "ns",
            "range": "± 7444.813460648954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568219.8940054086,
            "unit": "ns",
            "range": "± 1906.2051130861948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 211780.55617977527,
            "unit": "ns",
            "range": "± 12614.495814123338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205139.3,
            "unit": "ns",
            "range": "± 7479.487786674994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167498.9090909091,
            "unit": "ns",
            "range": "± 5165.656277059796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3166560.4285714286,
            "unit": "ns",
            "range": "± 34468.91978560995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2895881.1923076925,
            "unit": "ns",
            "range": "± 41985.03207768338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17434.82608695652,
            "unit": "ns",
            "range": "± 3179.9282565294816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72970.06521739131,
            "unit": "ns",
            "range": "± 6549.970287331897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90018.57894736843,
            "unit": "ns",
            "range": "± 3806.9482995259023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67295.78125,
            "unit": "ns",
            "range": "± 11628.525990858248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5843.7040816326535,
            "unit": "ns",
            "range": "± 2106.6673207199456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14177.642857142857,
            "unit": "ns",
            "range": "± 2230.8616117831766"
          }
        ]
      }
    ]
  }
}