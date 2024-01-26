window.BENCHMARK_DATA = {
  "lastUpdate": 1706252635203,
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
          "id": "db7cb09ecce1660e1709f3dfb4d7ca72e1d69fd1",
          "message": "Changelog",
          "timestamp": "2024-01-26T15:50:37+09:00",
          "tree_id": "f4c0a18daa555aea8fd3e2452632ee0bd7a5d7b3",
          "url": "https://github.com/greymistcube/libplanet/commit/db7cb09ecce1660e1709f3dfb4d7ca72e1d69fd1"
        },
        "date": 1706252607964,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 927413,
            "unit": "ns",
            "range": "± 74343.37567033533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1709618.3333333333,
            "unit": "ns",
            "range": "± 75688.36305707692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1477394.8979591837,
            "unit": "ns",
            "range": "± 153739.780397897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11015916.304347826,
            "unit": "ns",
            "range": "± 1145682.5504626243"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35257.142857142855,
            "unit": "ns",
            "range": "± 2712.3643993609403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5005466.666666667,
            "unit": "ns",
            "range": "± 58425.05170444154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12982278.57142857,
            "unit": "ns",
            "range": "± 75980.0396720838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32623571.42857143,
            "unit": "ns",
            "range": "± 398688.95805467863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66542457.14285714,
            "unit": "ns",
            "range": "± 581158.5229446513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133824453.33333333,
            "unit": "ns",
            "range": "± 1665932.0981131883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3287705.2864583335,
            "unit": "ns",
            "range": "± 16192.25364098109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1077316.5564903845,
            "unit": "ns",
            "range": "± 3013.4622508091816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739240.91796875,
            "unit": "ns",
            "range": "± 1354.763913903806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960482.061298077,
            "unit": "ns",
            "range": "± 5589.600860825751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625222.98828125,
            "unit": "ns",
            "range": "± 2581.9193660057176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566755.234375,
            "unit": "ns",
            "range": "± 1478.5197968086666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2177050.8771929825,
            "unit": "ns",
            "range": "± 91366.97418887787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2352554.347826087,
            "unit": "ns",
            "range": "± 89890.9090855793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2854908.9552238807,
            "unit": "ns",
            "range": "± 134920.82608896325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2853766.6666666665,
            "unit": "ns",
            "range": "± 181006.85239030287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12373019.78021978,
            "unit": "ns",
            "range": "± 1438159.5837288233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172423.45679012345,
            "unit": "ns",
            "range": "± 7582.072137696566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165334.32835820896,
            "unit": "ns",
            "range": "± 7831.125779953758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143031.914893617,
            "unit": "ns",
            "range": "± 5571.437500204629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2964452.380952381,
            "unit": "ns",
            "range": "± 70526.3115372385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2553021.052631579,
            "unit": "ns",
            "range": "± 55946.36895125911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12703.191489361701,
            "unit": "ns",
            "range": "± 2317.7529963705915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61508.602150537634,
            "unit": "ns",
            "range": "± 6688.6772578410855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48395.69892473118,
            "unit": "ns",
            "range": "± 4685.591094874626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65394.791666666664,
            "unit": "ns",
            "range": "± 13599.979642335122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2502.1505376344085,
            "unit": "ns",
            "range": "± 391.20174230063907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9489.655172413793,
            "unit": "ns",
            "range": "± 882.2585291565317"
          }
        ]
      }
    ]
  }
}