window.BENCHMARK_DATA = {
  "lastUpdate": 1689322741744,
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
          "id": "b888da88b58bc5066f7f54694e07839ab7292b99",
          "message": "Release 2.4.1",
          "timestamp": "2023-07-14T17:05:25+09:00",
          "tree_id": "9681d8a9488eec9cce736a5b57461ef0d7d77eca",
          "url": "https://github.com/greymistcube/libplanet/commit/b888da88b58bc5066f7f54694e07839ab7292b99"
        },
        "date": 1689322734650,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293519.175,
            "unit": "ns",
            "range": "± 10258.919815901796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280326.73333333334,
            "unit": "ns",
            "range": "± 8221.790462496316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248403.0612244898,
            "unit": "ns",
            "range": "± 9866.45791391251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4559352.8,
            "unit": "ns",
            "range": "± 49254.409054563694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4119148.230769231,
            "unit": "ns",
            "range": "± 24447.391507595265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22025.98947368421,
            "unit": "ns",
            "range": "± 1346.2013182469107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92594.81914893616,
            "unit": "ns",
            "range": "± 5382.061430949213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77711.78378378379,
            "unit": "ns",
            "range": "± 2632.29356197146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102055.36734693877,
            "unit": "ns",
            "range": "± 12508.537438619904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5890.81443298969,
            "unit": "ns",
            "range": "± 732.1787169397367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20303.44680851064,
            "unit": "ns",
            "range": "± 1572.7576877739527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1515486.551020408,
            "unit": "ns",
            "range": "± 88012.37234969344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2803501.2083333335,
            "unit": "ns",
            "range": "± 71395.8181609242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1941875.4146341463,
            "unit": "ns",
            "range": "± 102084.4329339963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5232495.813953488,
            "unit": "ns",
            "range": "± 193628.44147862357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6155069.245535715,
            "unit": "ns",
            "range": "± 21964.408321348077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1934652.5670572917,
            "unit": "ns",
            "range": "± 2383.190183183995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1408634.8466145834,
            "unit": "ns",
            "range": "± 3231.6274619172427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2682142.7744791666,
            "unit": "ns",
            "range": "± 1548.560619695207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830400.928125,
            "unit": "ns",
            "range": "± 659.5739526382205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772867.5848911831,
            "unit": "ns",
            "range": "± 419.05517147423456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3654042.714285714,
            "unit": "ns",
            "range": "± 34403.398603198344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3842465.7333333334,
            "unit": "ns",
            "range": "± 39015.12543592488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4604352.95,
            "unit": "ns",
            "range": "± 101674.6712802394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4190906.6363636362,
            "unit": "ns",
            "range": "± 88762.29871942654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6769524.62962963,
            "unit": "ns",
            "range": "± 188799.95644396255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8405576.933333334,
            "unit": "ns",
            "range": "± 250316.91628509283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22324741.266666666,
            "unit": "ns",
            "range": "± 256940.71841810032"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56677963.71428572,
            "unit": "ns",
            "range": "± 336515.0175177759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114556094.93333334,
            "unit": "ns",
            "range": "± 953143.2120241852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228879593.2,
            "unit": "ns",
            "range": "± 1093879.3444800808"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50138.58620689655,
            "unit": "ns",
            "range": "± 2757.5632297953143"
          }
        ]
      }
    ]
  }
}