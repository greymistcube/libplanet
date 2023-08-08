window.BENCHMARK_DATA = {
  "lastUpdate": 1691482473985,
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
          "id": "b1f623b36c98e27c21c226c5817feae3e4ac02d5",
          "message": "Added single get to ITrie; automatic parallel switch",
          "timestamp": "2023-08-08T16:57:00+09:00",
          "tree_id": "d610e24cc0d89f3256b8bdabcfe58ee6378c5b2a",
          "url": "https://github.com/greymistcube/libplanet/commit/b1f623b36c98e27c21c226c5817feae3e4ac02d5"
        },
        "date": 1691482456143,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8191843.0612244895,
            "unit": "ns",
            "range": "± 323136.21346928447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23337048.57142857,
            "unit": "ns",
            "range": "± 159385.92574892132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52781520.28571428,
            "unit": "ns",
            "range": "± 621530.1890760823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103905520.57142857,
            "unit": "ns",
            "range": "± 961087.4194968079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215877418.83333334,
            "unit": "ns",
            "range": "± 1707940.9372248547"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67744.69892473119,
            "unit": "ns",
            "range": "± 9820.155410070332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340449.84831460676,
            "unit": "ns",
            "range": "± 23493.56036966741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319877.0215053763,
            "unit": "ns",
            "range": "± 22784.672958973068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311119.3988764045,
            "unit": "ns",
            "range": "± 17188.632514784127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4197135.428571428,
            "unit": "ns",
            "range": "± 59493.22443866941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3713268.0714285714,
            "unit": "ns",
            "range": "± 39020.774666962854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21347.9587628866,
            "unit": "ns",
            "range": "± 3418.9462281208503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108458.36597938144,
            "unit": "ns",
            "range": "± 11093.559882529504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110365,
            "unit": "ns",
            "range": "± 9738.295887885108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117219.21276595745,
            "unit": "ns",
            "range": "± 12675.228320882507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6759.010204081633,
            "unit": "ns",
            "range": "± 1078.9431302183257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21448.151515151516,
            "unit": "ns",
            "range": "± 5171.617710360563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1599014.7731958763,
            "unit": "ns",
            "range": "± 160309.91072226744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2990872.714285714,
            "unit": "ns",
            "range": "± 204301.0816156328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2012340.8409090908,
            "unit": "ns",
            "range": "± 117611.49068831849"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5951214.96875,
            "unit": "ns",
            "range": "± 460751.53038491466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3335195.684782609,
            "unit": "ns",
            "range": "± 194311.27378031958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3536191.294117647,
            "unit": "ns",
            "range": "± 168033.18523732672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4447292.388888889,
            "unit": "ns",
            "range": "± 81254.97455814287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4012346.195652174,
            "unit": "ns",
            "range": "± 224519.55145064465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7273812.439024391,
            "unit": "ns",
            "range": "± 220290.34570335224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6599713.295758928,
            "unit": "ns",
            "range": "± 95445.64377056727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2032722.6385416666,
            "unit": "ns",
            "range": "± 17042.611801249128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1313644.9909319195,
            "unit": "ns",
            "range": "± 5658.8884070923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2876007.335720486,
            "unit": "ns",
            "range": "± 80250.02924014794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861967.0315987723,
            "unit": "ns",
            "range": "± 2870.383321480119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775191.0581752232,
            "unit": "ns",
            "range": "± 17807.534924032017"
          }
        ]
      }
    ]
  }
}