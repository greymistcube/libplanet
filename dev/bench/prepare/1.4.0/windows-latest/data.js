window.BENCHMARK_DATA = {
  "lastUpdate": 1684481531401,
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
          "id": "590839db14d220a02292eb1e2ec496c6c0498312",
          "message": "Prepare 1.4.0",
          "timestamp": "2023-05-19T16:17:33+09:00",
          "tree_id": "a78e8827bdaff2136046290e89b28ef3453a6253",
          "url": "https://github.com/greymistcube/libplanet/commit/590839db14d220a02292eb1e2ec496c6c0498312"
        },
        "date": 1684481508116,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1407763,
            "unit": "ns",
            "range": "± 118710.84609591527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2462815.625,
            "unit": "ns",
            "range": "± 76514.29176799628"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2147994.6808510637,
            "unit": "ns",
            "range": "± 122079.42449643559"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5013622.222222222,
            "unit": "ns",
            "range": "± 151241.05756064883"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44627.536231884056,
            "unit": "ns",
            "range": "± 2151.2570919984964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6917566.666666667,
            "unit": "ns",
            "range": "± 53880.76341948643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18031066.666666668,
            "unit": "ns",
            "range": "± 116387.15360300518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46245500,
            "unit": "ns",
            "range": "± 322096.3165620761"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91793793.33333333,
            "unit": "ns",
            "range": "± 475240.7577318299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185306966.66666666,
            "unit": "ns",
            "range": "± 1255531.3454963237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4854373.995535715,
            "unit": "ns",
            "range": "± 9886.848077827486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1524390.5208333333,
            "unit": "ns",
            "range": "± 3260.300858066323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1147121.1635044643,
            "unit": "ns",
            "range": "± 1701.6691697562003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2547032.091346154,
            "unit": "ns",
            "range": "± 4107.587625211337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 800591.2565104166,
            "unit": "ns",
            "range": "± 1021.4451015924689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730059.2354910715,
            "unit": "ns",
            "range": "± 920.52892314729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3030448.1481481483,
            "unit": "ns",
            "range": "± 83528.25118747997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3110453.5714285714,
            "unit": "ns",
            "range": "± 47523.40929707097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4049268.1818181816,
            "unit": "ns",
            "range": "± 98320.47399224949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3956675,
            "unit": "ns",
            "range": "± 132614.50543316163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6437360.344827586,
            "unit": "ns",
            "range": "± 176939.76042069797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260589.2857142857,
            "unit": "ns",
            "range": "± 9618.309784826182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248753.33333333334,
            "unit": "ns",
            "range": "± 11089.70306745378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227349,
            "unit": "ns",
            "range": "± 15549.97479617302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3891857.1428571427,
            "unit": "ns",
            "range": "± 24218.578827824735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3455471.4285714286,
            "unit": "ns",
            "range": "± 23366.624079638055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18968.367346938776,
            "unit": "ns",
            "range": "± 2097.401285478019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85085.86956521739,
            "unit": "ns",
            "range": "± 5899.200570197218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69809.30232558139,
            "unit": "ns",
            "range": "± 3770.2746945321933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82811.84210526316,
            "unit": "ns",
            "range": "± 4083.1349754900557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4476.344086021505,
            "unit": "ns",
            "range": "± 701.9224919218158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18852,
            "unit": "ns",
            "range": "± 2719.4949025972683"
          }
        ]
      }
    ]
  }
}