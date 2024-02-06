window.BENCHMARK_DATA = {
  "lastUpdate": 1707193305004,
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
          "id": "74d9178258a05ac1b256134fc8a92c69da9ea88f",
          "message": "Prepare 4.0.3",
          "timestamp": "2024-02-06T12:59:40+09:00",
          "tree_id": "a9aeb51f656297f693ffd7fd27d8441e992b96d3",
          "url": "https://github.com/greymistcube/libplanet/commit/74d9178258a05ac1b256134fc8a92c69da9ea88f"
        },
        "date": 1707193287093,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9122422.515463918,
            "unit": "ns",
            "range": "± 673557.4994777128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22053674.44736842,
            "unit": "ns",
            "range": "± 748729.5052900901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54421515.2037037,
            "unit": "ns",
            "range": "± 1391549.9300275773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107211164.5625,
            "unit": "ns",
            "range": "± 2006447.418944238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237170065.36666667,
            "unit": "ns",
            "range": "± 3969552.9304486252"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80435.41397849462,
            "unit": "ns",
            "range": "± 13316.212553692907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 353389.08602150535,
            "unit": "ns",
            "range": "± 39363.39785744905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331664.4393939394,
            "unit": "ns",
            "range": "± 49522.15587127792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320766.4772727273,
            "unit": "ns",
            "range": "± 36888.0612976384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4756808.092783505,
            "unit": "ns",
            "range": "± 342188.0872713403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3993413.933333333,
            "unit": "ns",
            "range": "± 117951.39454312448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26092.761363636364,
            "unit": "ns",
            "range": "± 4066.22883405544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113180.75773195876,
            "unit": "ns",
            "range": "± 20084.435163038543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116015.99462365592,
            "unit": "ns",
            "range": "± 17134.250807401793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121010.82795698925,
            "unit": "ns",
            "range": "± 21033.58067556014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8423.315789473685,
            "unit": "ns",
            "range": "± 979.1128557640882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22823.64285714286,
            "unit": "ns",
            "range": "± 2855.992337587411"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1794137.0652173914,
            "unit": "ns",
            "range": "± 443820.26108067774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3118038.304347826,
            "unit": "ns",
            "range": "± 292584.85211106087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2928481.7,
            "unit": "ns",
            "range": "± 488232.48181737674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 30743435.13402062,
            "unit": "ns",
            "range": "± 4628441.414177423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3471039.051020408,
            "unit": "ns",
            "range": "± 300898.58733588184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3745988.03125,
            "unit": "ns",
            "range": "± 346992.9276712454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4655113.275510204,
            "unit": "ns",
            "range": "± 370143.494224075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4824736.81443299,
            "unit": "ns",
            "range": "± 462976.5732760616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 35444059.61,
            "unit": "ns",
            "range": "± 4877070.662826694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6335684.794157608,
            "unit": "ns",
            "range": "± 155814.5502634298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1931201.6952886814,
            "unit": "ns",
            "range": "± 68416.08368129209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1213566.5665409483,
            "unit": "ns",
            "range": "± 35554.6822444413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3166961.04144436,
            "unit": "ns",
            "range": "± 113976.33734873169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 973439.412220348,
            "unit": "ns",
            "range": "± 35943.3502348005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 888479.6893554687,
            "unit": "ns",
            "range": "± 31224.864404975207"
          }
        ]
      }
    ]
  }
}