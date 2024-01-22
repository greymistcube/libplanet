window.BENCHMARK_DATA = {
  "lastUpdate": 1705914934326,
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
          "id": "9ba4ed4d5c71ca82a1450e3bb12375df97d26159",
          "message": "Prepare 4.1.0",
          "timestamp": "2024-01-22T18:04:22+09:00",
          "tree_id": "ee3961a7236680095a3aa7512074e6094fd39dae",
          "url": "https://github.com/greymistcube/libplanet/commit/9ba4ed4d5c71ca82a1450e3bb12375df97d26159"
        },
        "date": 1705914928122,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3774725.75078125,
            "unit": "ns",
            "range": "± 68993.95835847076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1196959.7303185095,
            "unit": "ns",
            "range": "± 7228.095737659456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 783354.994140625,
            "unit": "ns",
            "range": "± 11886.499149028126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1984981.5920973558,
            "unit": "ns",
            "range": "± 3080.495671922496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627603.18359375,
            "unit": "ns",
            "range": "± 2484.3152562394307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582210.4114583334,
            "unit": "ns",
            "range": "± 1774.190460525874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2418843.3421052634,
            "unit": "ns",
            "range": "± 82402.65347186415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2496164.8533333335,
            "unit": "ns",
            "range": "± 126065.56778868528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3141098.8571428573,
            "unit": "ns",
            "range": "± 87469.66114166725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3134681.6,
            "unit": "ns",
            "range": "± 110046.18045324754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13921521.852631578,
            "unit": "ns",
            "range": "± 1128523.0711552042"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40289.57894736842,
            "unit": "ns",
            "range": "± 5384.248586581535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203015.94845360826,
            "unit": "ns",
            "range": "± 13191.95130039141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194329.2966101695,
            "unit": "ns",
            "range": "± 8560.266241790214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174147.61764705883,
            "unit": "ns",
            "range": "± 5459.557968646589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3162915.2,
            "unit": "ns",
            "range": "± 33168.11971973776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2840089.2666666666,
            "unit": "ns",
            "range": "± 41521.34300653902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15142.765306122448,
            "unit": "ns",
            "range": "± 2275.4034367603995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68348.23333333334,
            "unit": "ns",
            "range": "± 5075.097873744888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59877.04494382023,
            "unit": "ns",
            "range": "± 5971.114082340139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64005.17741935484,
            "unit": "ns",
            "range": "± 12931.685142855169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3359.309523809524,
            "unit": "ns",
            "range": "± 798.2172602788037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16715.166666666668,
            "unit": "ns",
            "range": "± 1861.3864197175103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5619433.24,
            "unit": "ns",
            "range": "± 98336.59860197864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14374527.642857144,
            "unit": "ns",
            "range": "± 107946.37807841101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36407289.8,
            "unit": "ns",
            "range": "± 192180.941124764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75557252.92857143,
            "unit": "ns",
            "range": "± 550937.9149745759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150580573.3846154,
            "unit": "ns",
            "range": "± 992554.842773733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 943476.7527472527,
            "unit": "ns",
            "range": "± 60028.796131263065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1899302.2407407407,
            "unit": "ns",
            "range": "± 79970.21469553764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1666371.1649484537,
            "unit": "ns",
            "range": "± 138859.43625904882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12594093.882978724,
            "unit": "ns",
            "range": "± 1089415.8749519656"
          }
        ]
      }
    ]
  }
}