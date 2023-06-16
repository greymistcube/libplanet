window.BENCHMARK_DATA = {
  "lastUpdate": 1686924545270,
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
          "id": "668e6170100ac4148dc9bbb696538e4f3175e24f",
          "message": "Use updated API",
          "timestamp": "2023-06-16T21:27:25+09:00",
          "tree_id": "a74c43a54001892637a69309f353991dfceed011",
          "url": "https://github.com/greymistcube/libplanet/commit/668e6170100ac4148dc9bbb696538e4f3175e24f"
        },
        "date": 1686924522065,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1537263.6842105263,
            "unit": "ns",
            "range": "± 101409.19280429345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2937844.1860465114,
            "unit": "ns",
            "range": "± 105750.5382229365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2498423.3333333335,
            "unit": "ns",
            "range": "± 139152.2565999342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6432289.795918368,
            "unit": "ns",
            "range": "± 382800.18568810093"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53294.38202247191,
            "unit": "ns",
            "range": "± 3130.689713094087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8671546.666666666,
            "unit": "ns",
            "range": "± 140782.47083794948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25634747.777777776,
            "unit": "ns",
            "range": "± 972877.0074299519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59471029.62962963,
            "unit": "ns",
            "range": "± 1612200.5734673087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129679745,
            "unit": "ns",
            "range": "± 2944984.2934931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233380538.8888889,
            "unit": "ns",
            "range": "± 4911801.078451878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5852204.575892857,
            "unit": "ns",
            "range": "± 35060.772594211536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1883571.8191964286,
            "unit": "ns",
            "range": "± 23934.917928174098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1421407.666015625,
            "unit": "ns",
            "range": "± 22830.7182663203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3242310.390625,
            "unit": "ns",
            "range": "± 43011.50292626994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1011106.0546875,
            "unit": "ns",
            "range": "± 7888.237314075755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 946769.8177083334,
            "unit": "ns",
            "range": "± 11357.179408441034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3761425.352112676,
            "unit": "ns",
            "range": "± 182453.540636913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4274144.444444444,
            "unit": "ns",
            "range": "± 85480.58928078847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4838826.0869565215,
            "unit": "ns",
            "range": "± 116532.70402217295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4925186.79245283,
            "unit": "ns",
            "range": "± 203743.03672644566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7821512.5,
            "unit": "ns",
            "range": "± 198683.45002847468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317088.8888888889,
            "unit": "ns",
            "range": "± 6456.9970154489265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300258.6206896552,
            "unit": "ns",
            "range": "± 7134.099064221639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 264407.14285714284,
            "unit": "ns",
            "range": "± 14197.528935802893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4884638.888888889,
            "unit": "ns",
            "range": "± 104183.24997408844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4420450,
            "unit": "ns",
            "range": "± 94119.13601763397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20167.74193548387,
            "unit": "ns",
            "range": "± 1523.8795805958825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99541.17647058824,
            "unit": "ns",
            "range": "± 5280.518871457683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85301.96078431372,
            "unit": "ns",
            "range": "± 3485.081932814689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97892.5925925926,
            "unit": "ns",
            "range": "± 6780.316692046504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6052.688172043011,
            "unit": "ns",
            "range": "± 754.7806185516343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19735.263157894737,
            "unit": "ns",
            "range": "± 1461.270827058146"
          }
        ]
      }
    ]
  }
}