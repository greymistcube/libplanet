window.BENCHMARK_DATA = {
  "lastUpdate": 1679048444925,
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
      }
    ]
  }
}