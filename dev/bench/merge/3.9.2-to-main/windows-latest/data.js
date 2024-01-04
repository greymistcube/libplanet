window.BENCHMARK_DATA = {
  "lastUpdate": 1704355898152,
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
          "id": "a8f4615570603c3cbe8eb14dfb87e907d223b5ae",
          "message": "Release 3.9.2",
          "timestamp": "2024-01-04T16:58:57+09:00",
          "tree_id": "9dc58c6da927f1a3e0753c47498663840bcbead5",
          "url": "https://github.com/greymistcube/libplanet/commit/a8f4615570603c3cbe8eb14dfb87e907d223b5ae"
        },
        "date": 1704355880769,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1027247.4747474748,
            "unit": "ns",
            "range": "± 90192.16937754306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1709157.894736842,
            "unit": "ns",
            "range": "± 72343.54040511056"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1556096.907216495,
            "unit": "ns",
            "range": "± 141410.01810162433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10905326.315789474,
            "unit": "ns",
            "range": "± 800175.1485410336"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34108.86075949367,
            "unit": "ns",
            "range": "± 1731.6947289316536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4986114.285714285,
            "unit": "ns",
            "range": "± 18647.575925896854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12817642.857142856,
            "unit": "ns",
            "range": "± 115356.2689722964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32000493.333333332,
            "unit": "ns",
            "range": "± 369390.51435471117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64823800,
            "unit": "ns",
            "range": "± 412613.43242238805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126992621.42857143,
            "unit": "ns",
            "range": "± 731477.0222781295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3244883.3072916665,
            "unit": "ns",
            "range": "± 6097.482461879707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1030255.0641741072,
            "unit": "ns",
            "range": "± 2318.8388485076653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737782.2265625,
            "unit": "ns",
            "range": "± 2961.2402787101037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1908051.8229166667,
            "unit": "ns",
            "range": "± 2319.551676604702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615096.4564732143,
            "unit": "ns",
            "range": "± 1235.6545936983487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555150.9915865385,
            "unit": "ns",
            "range": "± 907.3602692174782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2139926.8292682925,
            "unit": "ns",
            "range": "± 77018.2966066838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2278768.4210526315,
            "unit": "ns",
            "range": "± 48247.95968779496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2803577.5,
            "unit": "ns",
            "range": "± 99367.71256943601"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2830715.625,
            "unit": "ns",
            "range": "± 84586.02458110609"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12744538.709677419,
            "unit": "ns",
            "range": "± 1694666.2283940122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170772.72727272726,
            "unit": "ns",
            "range": "± 9001.567261657507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166967.04545454544,
            "unit": "ns",
            "range": "± 8813.75911805023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142000,
            "unit": "ns",
            "range": "± 4199.178901675405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2808306.6666666665,
            "unit": "ns",
            "range": "± 47210.22084655983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2504176.923076923,
            "unit": "ns",
            "range": "± 27006.732304067995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10090.10989010989,
            "unit": "ns",
            "range": "± 1146.0128896943277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52184.61538461538,
            "unit": "ns",
            "range": "± 5018.740946070107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44020,
            "unit": "ns",
            "range": "± 1416.2427721769984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51964.583333333336,
            "unit": "ns",
            "range": "± 9075.693149305505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2378.3505154639174,
            "unit": "ns",
            "range": "± 484.3868125707387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9745.555555555555,
            "unit": "ns",
            "range": "± 1238.0812548084696"
          }
        ]
      }
    ]
  }
}