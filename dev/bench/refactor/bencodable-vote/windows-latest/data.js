window.BENCHMARK_DATA = {
  "lastUpdate": 1679273967113,
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
          "id": "0670779e98f7d1b06df233959660523b5eb1ee95",
          "message": "Fix improper bencoding",
          "timestamp": "2023-03-17T18:49:27+09:00",
          "tree_id": "457dec915722a9cf2f041ce045d21405df284e85",
          "url": "https://github.com/greymistcube/libplanet/commit/0670779e98f7d1b06df233959660523b5eb1ee95"
        },
        "date": 1679048419578,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1513768.686868687,
            "unit": "ns",
            "range": "± 128544.58263096226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2810076.0416666665,
            "unit": "ns",
            "range": "± 163934.2966876744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2260951.0416666665,
            "unit": "ns",
            "range": "± 136023.03713151847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5753068,
            "unit": "ns",
            "range": "± 289632.51374149317"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53533.333333333336,
            "unit": "ns",
            "range": "± 2762.0191889268262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7926606.060606061,
            "unit": "ns",
            "range": "± 249442.63736803542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21033194.444444444,
            "unit": "ns",
            "range": "± 446166.4744335871"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53823196.15384615,
            "unit": "ns",
            "range": "± 1344537.699428549"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 106921050,
            "unit": "ns",
            "range": "± 1697898.1358183373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 209322200,
            "unit": "ns",
            "range": "± 3657352.5666693766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5317012.1875,
            "unit": "ns",
            "range": "± 68631.39101859528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1719138.950892857,
            "unit": "ns",
            "range": "± 14432.529689612407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1312825.7080078125,
            "unit": "ns",
            "range": "± 25407.688465657448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3049306.0416666665,
            "unit": "ns",
            "range": "± 39549.013571572155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 933601.328125,
            "unit": "ns",
            "range": "± 9290.972610341525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 868093.3723958334,
            "unit": "ns",
            "range": "± 13138.300047069815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3395933.870967742,
            "unit": "ns",
            "range": "± 153184.37614928416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5668325,
            "unit": "ns",
            "range": "± 185512.70942213867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26535025,
            "unit": "ns",
            "range": "± 590550.0904598231"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7197615,
            "unit": "ns",
            "range": "± 157910.808519773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30589494.444444444,
            "unit": "ns",
            "range": "± 615840.3044260383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206985.7142857143,
            "unit": "ns",
            "range": "± 12350.791952570089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198390,
            "unit": "ns",
            "range": "± 10326.37767803246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176412,
            "unit": "ns",
            "range": "± 13360.856290226342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11970819.047619049,
            "unit": "ns",
            "range": "± 279567.96601014154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9665437.5,
            "unit": "ns",
            "range": "± 179758.36698190158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21416.129032258064,
            "unit": "ns",
            "range": "± 2026.4173956592888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59410.98901098901,
            "unit": "ns",
            "range": "± 4398.117035213303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46598.83720930233,
            "unit": "ns",
            "range": "± 2804.984814304978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118420.20202020202,
            "unit": "ns",
            "range": "± 23472.13710693883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6503.225806451613,
            "unit": "ns",
            "range": "± 858.3922804597412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20873.684210526317,
            "unit": "ns",
            "range": "± 2284.555477331063"
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
          "id": "693f729f93a8c6d9e75c202e766b95c51c52a4c1",
          "message": "Added compatibility warning",
          "timestamp": "2023-03-20T09:40:21+09:00",
          "tree_id": "f7642fcab75e8e532157a3af5e43029aaa1883b3",
          "url": "https://github.com/greymistcube/libplanet/commit/693f729f93a8c6d9e75c202e766b95c51c52a4c1"
        },
        "date": 1679273944445,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1552872.6315789474,
            "unit": "ns",
            "range": "± 125224.67505648045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2920859.302325581,
            "unit": "ns",
            "range": "± 155211.87596914248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2421773.404255319,
            "unit": "ns",
            "range": "± 164431.5062656867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5821327.5,
            "unit": "ns",
            "range": "± 205201.22080346104"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54722.09302325582,
            "unit": "ns",
            "range": "± 3283.054573475948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8297167.307692308,
            "unit": "ns",
            "range": "± 342621.6524876874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23004900,
            "unit": "ns",
            "range": "± 567241.111954087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 59175291.93548387,
            "unit": "ns",
            "range": "± 1800737.9662746037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 115185886.66666667,
            "unit": "ns",
            "range": "± 2017350.5955891279"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 235896071.42857143,
            "unit": "ns",
            "range": "± 3815065.8739001877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5720549.114583333,
            "unit": "ns",
            "range": "± 94625.7431566598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1784662.7371651786,
            "unit": "ns",
            "range": "± 14815.141099941779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1386719.033203125,
            "unit": "ns",
            "range": "± 31465.157603445874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3018151.3521634615,
            "unit": "ns",
            "range": "± 34338.8223394576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 947598.3747209822,
            "unit": "ns",
            "range": "± 10789.33054662578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 877427.4072265625,
            "unit": "ns",
            "range": "± 19723.085731626197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3757970.3703703703,
            "unit": "ns",
            "range": "± 99092.9626268447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6000833.333333333,
            "unit": "ns",
            "range": "± 124245.16087156071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27301616.393442623,
            "unit": "ns",
            "range": "± 1214000.3012328467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6813830.882352941,
            "unit": "ns",
            "range": "± 325006.8744427273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30953952.173913043,
            "unit": "ns",
            "range": "± 1177944.367058164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206992.04545454544,
            "unit": "ns",
            "range": "± 11315.752641207324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216159.0909090909,
            "unit": "ns",
            "range": "± 5288.861529389503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 189657.14285714287,
            "unit": "ns",
            "range": "± 14187.892326198204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12390735.294117646,
            "unit": "ns",
            "range": "± 392931.37413190055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10402396.666666666,
            "unit": "ns",
            "range": "± 285879.2773102001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23386.17021276596,
            "unit": "ns",
            "range": "± 2393.0837200453707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59692.708333333336,
            "unit": "ns",
            "range": "± 5934.453281104673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45107.954545454544,
            "unit": "ns",
            "range": "± 3384.624517482983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115677.31958762887,
            "unit": "ns",
            "range": "± 20458.680437421906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7463.541666666667,
            "unit": "ns",
            "range": "± 1100.4419965265315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22464.130434782608,
            "unit": "ns",
            "range": "± 2170.257569245121"
          }
        ]
      }
    ]
  }
}