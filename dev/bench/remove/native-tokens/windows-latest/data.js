window.BENCHMARK_DATA = {
  "lastUpdate": 1683805091574,
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
          "id": "9f3de4b5a6190219d83ceb9985da0b6d0bac9b3d",
          "message": "Removed native tokens",
          "timestamp": "2023-05-11T20:19:50+09:00",
          "tree_id": "c1b1950a53da0ae0c46c99136417be98728f0f19",
          "url": "https://github.com/greymistcube/libplanet/commit/9f3de4b5a6190219d83ceb9985da0b6d0bac9b3d"
        },
        "date": 1683805069447,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1380426,
            "unit": "ns",
            "range": "± 119180.67145508472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2534321.276595745,
            "unit": "ns",
            "range": "± 98508.19417730691"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2182075.5555555555,
            "unit": "ns",
            "range": "± 120452.89844611425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5147600,
            "unit": "ns",
            "range": "± 153039.60271772795"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49021.27659574468,
            "unit": "ns",
            "range": "± 2930.1132988636346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7373270.731707317,
            "unit": "ns",
            "range": "± 260746.19100180775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19859433.333333332,
            "unit": "ns",
            "range": "± 267344.76047302847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51271020,
            "unit": "ns",
            "range": "± 660172.7232864356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99358643.33333333,
            "unit": "ns",
            "range": "± 934021.1296682033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201964146.66666666,
            "unit": "ns",
            "range": "± 2395038.0470782467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4878667.522321428,
            "unit": "ns",
            "range": "± 27901.673167072116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1530746.7643229167,
            "unit": "ns",
            "range": "± 7079.439369456879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1186039.927455357,
            "unit": "ns",
            "range": "± 6549.670093945841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625079.4921875,
            "unit": "ns",
            "range": "± 13259.880834243835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838414.7739955357,
            "unit": "ns",
            "range": "± 4779.308551375649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778382.7497209822,
            "unit": "ns",
            "range": "± 3042.0188869095714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3260360,
            "unit": "ns",
            "range": "± 42454.67835569732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3419143.3333333335,
            "unit": "ns",
            "range": "± 83598.22091545898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4210472.222222222,
            "unit": "ns",
            "range": "± 68501.81238955357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4327119.047619048,
            "unit": "ns",
            "range": "± 78293.91176233067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6703126.923076923,
            "unit": "ns",
            "range": "± 155005.4594075765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269164.70588235295,
            "unit": "ns",
            "range": "± 5485.656430235878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261553.57142857142,
            "unit": "ns",
            "range": "± 11248.740766466655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236355.6603773585,
            "unit": "ns",
            "range": "± 9879.318239759177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4104071.4285714286,
            "unit": "ns",
            "range": "± 49926.78375645417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3737207.1428571427,
            "unit": "ns",
            "range": "± 32294.49737090764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21361.052631578947,
            "unit": "ns",
            "range": "± 1790.47686129072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91511.45833333333,
            "unit": "ns",
            "range": "± 5680.80553575703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79690,
            "unit": "ns",
            "range": "± 3893.6272720091397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99091.66666666667,
            "unit": "ns",
            "range": "± 14160.75872682316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6038.144329896907,
            "unit": "ns",
            "range": "± 1056.5710359232312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20311.57894736842,
            "unit": "ns",
            "range": "± 1995.5196176016218"
          }
        ]
      }
    ]
  }
}