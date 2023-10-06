window.BENCHMARK_DATA = {
  "lastUpdate": 1696597750762,
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
          "id": "1722d4fb254d6e1366b926fc53cabd07dbede07e",
          "message": "Prepare 3.7.0",
          "timestamp": "2023-10-06T21:54:42+09:00",
          "tree_id": "cbd6e25eb97c88fc010844922b0bba97a7b24078",
          "url": "https://github.com/greymistcube/libplanet/commit/1722d4fb254d6e1366b926fc53cabd07dbede07e"
        },
        "date": 1696597725980,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1274938.383838384,
            "unit": "ns",
            "range": "± 117395.06622031257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2327030.769230769,
            "unit": "ns",
            "range": "± 78686.62079094499"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1865154.6391752576,
            "unit": "ns",
            "range": "± 147032.40928208834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7363316.129032258,
            "unit": "ns",
            "range": "± 188738.7031440985"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43596.55172413793,
            "unit": "ns",
            "range": "± 2398.228429286437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7040028.571428572,
            "unit": "ns",
            "range": "± 37903.73289048147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17937846.666666668,
            "unit": "ns",
            "range": "± 196818.4183696328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46023535.71428572,
            "unit": "ns",
            "range": "± 247674.98742425404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91266613.33333333,
            "unit": "ns",
            "range": "± 579630.9624810141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187375457.14285713,
            "unit": "ns",
            "range": "± 633091.49960186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4329932.838541667,
            "unit": "ns",
            "range": "± 16817.08122470131"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1396688.9090401786,
            "unit": "ns",
            "range": "± 1482.7471902589868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1000289.7005208334,
            "unit": "ns",
            "range": "± 1127.4067193297426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2559674.9441964286,
            "unit": "ns",
            "range": "± 7459.425997620001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803516.6666666666,
            "unit": "ns",
            "range": "± 815.1613991610417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739894.2317708334,
            "unit": "ns",
            "range": "± 1048.899803684361"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2971210,
            "unit": "ns",
            "range": "± 54232.789238351266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3073218.1818181816,
            "unit": "ns",
            "range": "± 74918.90623082074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3891262.0689655175,
            "unit": "ns",
            "range": "± 111827.00738766458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3725233.3333333335,
            "unit": "ns",
            "range": "± 96867.27659721997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8946443.243243244,
            "unit": "ns",
            "range": "± 278830.60921217676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 246633.33333333334,
            "unit": "ns",
            "range": "± 3317.264298219607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236770.58823529413,
            "unit": "ns",
            "range": "± 4646.606921437721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201903.2786885246,
            "unit": "ns",
            "range": "± 8972.141461455652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3808006.6666666665,
            "unit": "ns",
            "range": "± 32423.811062389377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3481093.3333333335,
            "unit": "ns",
            "range": "± 40694.35669311737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18163.440860215054,
            "unit": "ns",
            "range": "± 1449.4215447547522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80406.45161290323,
            "unit": "ns",
            "range": "± 6159.471435037773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64438.88888888889,
            "unit": "ns",
            "range": "± 1906.27202042967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69425.58139534884,
            "unit": "ns",
            "range": "± 4430.51413950522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4321.0526315789475,
            "unit": "ns",
            "range": "± 608.607538154368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17161.224489795917,
            "unit": "ns",
            "range": "± 1853.4243956314754"
          }
        ]
      }
    ]
  }
}