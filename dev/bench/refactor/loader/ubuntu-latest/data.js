window.BENCHMARK_DATA = {
  "lastUpdate": 1683720177190,
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
          "id": "458a860c655f755fedf1e7f39ced14d000478850",
          "message": "Introduce IndexedActionLoader",
          "timestamp": "2023-05-10T20:49:33+09:00",
          "tree_id": "012e410a2d3dee29535205ae538639da96d7e320",
          "url": "https://github.com/greymistcube/libplanet/commit/458a860c655f755fedf1e7f39ced14d000478850"
        },
        "date": 1683720169015,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279729.01960784313,
            "unit": "ns",
            "range": "± 10149.13973790921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268530.3076923077,
            "unit": "ns",
            "range": "± 2732.6950184941174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236489.55,
            "unit": "ns",
            "range": "± 5210.479445310191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4242360.133333334,
            "unit": "ns",
            "range": "± 23589.34505802708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3729865.4285714286,
            "unit": "ns",
            "range": "± 19962.394590885076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17831.239583333332,
            "unit": "ns",
            "range": "± 1180.1931754883597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84383.25,
            "unit": "ns",
            "range": "± 3959.241650071636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72954.66666666667,
            "unit": "ns",
            "range": "± 2630.7157948923204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89091.77551020408,
            "unit": "ns",
            "range": "± 11373.896764019328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4860.204301075269,
            "unit": "ns",
            "range": "± 481.184195029842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17681.239583333332,
            "unit": "ns",
            "range": "± 1479.1448934028826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3272828.533333333,
            "unit": "ns",
            "range": "± 33769.43708627387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3467845,
            "unit": "ns",
            "range": "± 70450.70425147936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4220360.5,
            "unit": "ns",
            "range": "± 85028.53714817646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4232010.655172414,
            "unit": "ns",
            "range": "± 115059.97413966207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6633114.5,
            "unit": "ns",
            "range": "± 75427.3768177046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6200202.735491072,
            "unit": "ns",
            "range": "± 11797.545434279009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1836176.2447916667,
            "unit": "ns",
            "range": "± 506.0691265374599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365051.6463448661,
            "unit": "ns",
            "range": "± 454.17112163204104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2514759.728125,
            "unit": "ns",
            "range": "± 1377.7484254241797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796765.335546875,
            "unit": "ns",
            "range": "± 675.9720244113657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730919.3781550481,
            "unit": "ns",
            "range": "± 551.7362103392078"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45796.56179775281,
            "unit": "ns",
            "range": "± 2467.476982277537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7621752.5,
            "unit": "ns",
            "range": "± 28393.40424424171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19404656.533333335,
            "unit": "ns",
            "range": "± 96054.13231303234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49858049.13333333,
            "unit": "ns",
            "range": "± 389350.2104939655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100285523.06666666,
            "unit": "ns",
            "range": "± 280266.2333066968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199036406.2857143,
            "unit": "ns",
            "range": "± 543979.7309100671"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1362073.3870967743,
            "unit": "ns",
            "range": "± 78024.8302984979"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2519912.0434782607,
            "unit": "ns",
            "range": "± 55534.98894102566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2154186.345454545,
            "unit": "ns",
            "range": "± 83084.22737783054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5116069.16,
            "unit": "ns",
            "range": "± 118159.36822137012"
          }
        ]
      }
    ]
  }
}