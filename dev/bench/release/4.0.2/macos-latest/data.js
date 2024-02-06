window.BENCHMARK_DATA = {
  "lastUpdate": 1707188072001,
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
          "id": "581b937b0b76ce7f38ce36160ca0ee9690ba8619",
          "message": "Release 4.0.2",
          "timestamp": "2024-02-06T11:28:37+09:00",
          "tree_id": "ef42b44dbe32becfe4bec6a583d944ef92df7e9c",
          "url": "https://github.com/greymistcube/libplanet/commit/581b937b0b76ce7f38ce36160ca0ee9690ba8619"
        },
        "date": 1707188053888,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 13127425.653061224,
            "unit": "ns",
            "range": "± 2188308.5430038637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 30735591.71,
            "unit": "ns",
            "range": "± 4422335.202711515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 75616733.56060606,
            "unit": "ns",
            "range": "± 9589516.40424717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 152415993.63186812,
            "unit": "ns",
            "range": "± 23410379.565251593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 344729277.67777777,
            "unit": "ns",
            "range": "± 59379249.235098965"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83146.42631578947,
            "unit": "ns",
            "range": "± 21768.540795045876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 400193.4166666667,
            "unit": "ns",
            "range": "± 107213.49813287372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 402427.6,
            "unit": "ns",
            "range": "± 100789.89619430406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 383884.56565656565,
            "unit": "ns",
            "range": "± 93384.740712288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6843434.732323232,
            "unit": "ns",
            "range": "± 1424431.2379089033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5753992.149484536,
            "unit": "ns",
            "range": "± 1276675.5142365939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31483.98979591837,
            "unit": "ns",
            "range": "± 6640.346400563938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 126872.77835051547,
            "unit": "ns",
            "range": "± 24486.66287183285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 126352.73195876289,
            "unit": "ns",
            "range": "± 20251.1693394457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105940.26086956522,
            "unit": "ns",
            "range": "± 16777.93016210897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8075.021276595745,
            "unit": "ns",
            "range": "± 1156.0036065048052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25686.627659574468,
            "unit": "ns",
            "range": "± 5558.6361641173435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1953444.5555555555,
            "unit": "ns",
            "range": "± 507601.526966999"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3656286.5408163266,
            "unit": "ns",
            "range": "± 865658.1812896649"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3112145.793814433,
            "unit": "ns",
            "range": "± 750334.6029483826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 31989754.285714287,
            "unit": "ns",
            "range": "± 6128307.713267989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4707510.16,
            "unit": "ns",
            "range": "± 1153280.2970449051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5131559.46969697,
            "unit": "ns",
            "range": "± 971948.3742431947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6666167.989795919,
            "unit": "ns",
            "range": "± 1466201.7536687732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6298397.541666667,
            "unit": "ns",
            "range": "± 1206627.372852979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 37588027.6122449,
            "unit": "ns",
            "range": "± 6638369.0775642935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5796673.057589286,
            "unit": "ns",
            "range": "± 280799.79744625796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1719081.5596354166,
            "unit": "ns",
            "range": "± 30283.431651475905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1140165.8716052826,
            "unit": "ns",
            "range": "± 41175.05110339699"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2568982.8451021635,
            "unit": "ns",
            "range": "± 32475.97983824395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 781127.08984375,
            "unit": "ns",
            "range": "± 16942.078981592265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 596579.123046875,
            "unit": "ns",
            "range": "± 27855.81698033978"
          }
        ]
      }
    ]
  }
}