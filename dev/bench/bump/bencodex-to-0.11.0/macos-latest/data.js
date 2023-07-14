window.BENCHMARK_DATA = {
  "lastUpdate": 1689322329631,
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
          "id": "639b3c048cc8a77e48c723374264fcd3544a0b1e",
          "message": "Fix package references",
          "timestamp": "2023-07-14T16:42:36+09:00",
          "tree_id": "968f82627aae9c0bbbdeff1c7db89e4204d978b2",
          "url": "https://github.com/greymistcube/libplanet/commit/639b3c048cc8a77e48c723374264fcd3544a0b1e"
        },
        "date": 1689321506440,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7807018.076923077,
            "unit": "ns",
            "range": "± 58666.74937086245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20320521.684210528,
            "unit": "ns",
            "range": "± 446867.83379404654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50758286.13043478,
            "unit": "ns",
            "range": "± 1245204.3096670487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98621868.46666667,
            "unit": "ns",
            "range": "± 678040.3738785837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201486219.84615386,
            "unit": "ns",
            "range": "± 856817.9661520727"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66644.20103092784,
            "unit": "ns",
            "range": "± 8034.311113339862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336132.5465116279,
            "unit": "ns",
            "range": "± 17581.36275696309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312044.92253521126,
            "unit": "ns",
            "range": "± 15162.10823322589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 330934.1111111111,
            "unit": "ns",
            "range": "± 6897.3148325049515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4294039.933333334,
            "unit": "ns",
            "range": "± 62045.89750046408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4016920.0588235296,
            "unit": "ns",
            "range": "± 81893.48006592969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22351.444444444445,
            "unit": "ns",
            "range": "± 4649.210238445863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102676.32323232324,
            "unit": "ns",
            "range": "± 14162.535600278243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111464.40404040404,
            "unit": "ns",
            "range": "± 12708.87836130445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120301.05376344085,
            "unit": "ns",
            "range": "± 14492.611554172061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6908.416666666667,
            "unit": "ns",
            "range": "± 906.0384872348841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18729.315217391304,
            "unit": "ns",
            "range": "± 2192.8464713241674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1635032.9157894736,
            "unit": "ns",
            "range": "± 167367.85806672648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2963341.785714286,
            "unit": "ns",
            "range": "± 127764.6287738649"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2148196.2395833335,
            "unit": "ns",
            "range": "± 219231.22201292138"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6155360.354838709,
            "unit": "ns",
            "range": "± 269621.91923087573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3283265.185714286,
            "unit": "ns",
            "range": "± 106129.45997993965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3550546.2608695654,
            "unit": "ns",
            "range": "± 88822.39591260825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4452266.119047619,
            "unit": "ns",
            "range": "± 161187.19156540194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3858357.873015873,
            "unit": "ns",
            "range": "± 176927.7443720925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7177192.6,
            "unit": "ns",
            "range": "± 281677.0423940097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6857158.2140625,
            "unit": "ns",
            "range": "± 22888.509976557587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1953106.4287860577,
            "unit": "ns",
            "range": "± 7771.125013076113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1296262.8688802083,
            "unit": "ns",
            "range": "± 15394.37535073755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2645231.9821428573,
            "unit": "ns",
            "range": "± 142028.29079995534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855142.3697265625,
            "unit": "ns",
            "range": "± 3904.423278516907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 803883.7098958333,
            "unit": "ns",
            "range": "± 1928.105071541478"
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
          "id": "9915b1153986d8444b41c256f6c4bb33747105f9",
          "message": "Fix package references",
          "timestamp": "2023-07-14T16:55:04+09:00",
          "tree_id": "56464697796c2a6fcb34286edce2ff533972e4d4",
          "url": "https://github.com/greymistcube/libplanet/commit/9915b1153986d8444b41c256f6c4bb33747105f9"
        },
        "date": 1689322315770,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8557074,
            "unit": "ns",
            "range": "± 179847.4080947022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21464206.681818184,
            "unit": "ns",
            "range": "± 526651.4208317116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54617242.53125,
            "unit": "ns",
            "range": "± 2453603.7610454634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108841136.79411764,
            "unit": "ns",
            "range": "± 2208053.5108586806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219125167.83333334,
            "unit": "ns",
            "range": "± 3494069.254035077"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74631.26086956522,
            "unit": "ns",
            "range": "± 8156.120366736488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 344991.0287356322,
            "unit": "ns",
            "range": "± 45318.93328806792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331771.6451612903,
            "unit": "ns",
            "range": "± 34817.68907517793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316915.59154929576,
            "unit": "ns",
            "range": "± 15561.634205935961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4416475.70212766,
            "unit": "ns",
            "range": "± 170209.0072625437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3723825.5,
            "unit": "ns",
            "range": "± 72603.99534202646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20511.867346938776,
            "unit": "ns",
            "range": "± 4399.032635899203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98270.0412371134,
            "unit": "ns",
            "range": "± 13314.073478933804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98806.78282828283,
            "unit": "ns",
            "range": "± 10040.060162272392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114601.32631578947,
            "unit": "ns",
            "range": "± 13462.817042191955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6722.736842105263,
            "unit": "ns",
            "range": "± 961.7678780702721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21124.531914893618,
            "unit": "ns",
            "range": "± 3549.0883713691455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1638375.0257731958,
            "unit": "ns",
            "range": "± 195311.9971942911"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2930027,
            "unit": "ns",
            "range": "± 75289.28899438486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2026692.2765957448,
            "unit": "ns",
            "range": "± 130254.25762132234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5755008.134615385,
            "unit": "ns",
            "range": "± 237660.8814115913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3431476.4555555554,
            "unit": "ns",
            "range": "± 236232.93086303285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3626528.8125,
            "unit": "ns",
            "range": "± 292697.3992724734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4685373.591836735,
            "unit": "ns",
            "range": "± 359289.7612360653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4135696.4845360825,
            "unit": "ns",
            "range": "± 378673.8122869051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7492554.878947369,
            "unit": "ns",
            "range": "± 485400.2762039115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7271694.383049242,
            "unit": "ns",
            "range": "± 223150.81647185347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2140287.3661458334,
            "unit": "ns",
            "range": "± 26700.116267196223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1298351.2861979166,
            "unit": "ns",
            "range": "± 14975.608222597764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2943752.894238281,
            "unit": "ns",
            "range": "± 104285.12845946877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 905887.2055664062,
            "unit": "ns",
            "range": "± 10757.310199383946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 804777.9746744792,
            "unit": "ns",
            "range": "± 13290.988177024365"
          }
        ]
      }
    ]
  }
}