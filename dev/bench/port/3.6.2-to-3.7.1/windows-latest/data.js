window.BENCHMARK_DATA = {
  "lastUpdate": 1700534008599,
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
          "id": "1aaf4d0f97903475bf4dff51d08bfc581df2665f",
          "message": "Merge tag '3.6.2' into port/3.6.2-to-3.7.1\n\nLibplanet 3.6.2",
          "timestamp": "2023-11-21T11:21:28+09:00",
          "tree_id": "edce08a8074a4ad8dc2d4f560984a1db8e096f97",
          "url": "https://github.com/greymistcube/libplanet/commit/1aaf4d0f97903475bf4dff51d08bfc581df2665f"
        },
        "date": 1700533991156,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 960987.6288659794,
            "unit": "ns",
            "range": "± 100035.87508336276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1748844.4444444445,
            "unit": "ns",
            "range": "± 72795.4038220138"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1394970.707070707,
            "unit": "ns",
            "range": "± 144734.85275688153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5207112.244897959,
            "unit": "ns",
            "range": "± 329075.67527044937"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34714.117647058825,
            "unit": "ns",
            "range": "± 1883.079604137384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5323020,
            "unit": "ns",
            "range": "± 93326.76235372452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13429838.461538462,
            "unit": "ns",
            "range": "± 105791.89113901515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35404500,
            "unit": "ns",
            "range": "± 330857.7661602814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67189740,
            "unit": "ns",
            "range": "± 1201006.358256037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134696946.66666666,
            "unit": "ns",
            "range": "± 1247973.1807252606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3231856.417410714,
            "unit": "ns",
            "range": "± 13664.481387406546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068100.1534598214,
            "unit": "ns",
            "range": "± 6138.790188606598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728180.2594866072,
            "unit": "ns",
            "range": "± 1302.0702749191378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920199.0755208333,
            "unit": "ns",
            "range": "± 10911.412939902533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 606780.76171875,
            "unit": "ns",
            "range": "± 1127.1819911637583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566394.7265625,
            "unit": "ns",
            "range": "± 1883.8733774796583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2161234.090909091,
            "unit": "ns",
            "range": "± 80618.72638128427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2287513.9534883723,
            "unit": "ns",
            "range": "± 84530.23291612847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2792685.714285714,
            "unit": "ns",
            "range": "± 98399.49080630837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2625766.6666666665,
            "unit": "ns",
            "range": "± 176380.86651466414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6005749.382716049,
            "unit": "ns",
            "range": "± 315119.3663215008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179744.61538461538,
            "unit": "ns",
            "range": "± 8369.12164539294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168025.75757575757,
            "unit": "ns",
            "range": "± 7549.657365756829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141390.47619047618,
            "unit": "ns",
            "range": "± 3328.649089631522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2706446.6666666665,
            "unit": "ns",
            "range": "± 32271.2137685467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2490153.3333333335,
            "unit": "ns",
            "range": "± 33410.28213560838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11844.086021505376,
            "unit": "ns",
            "range": "± 1878.6247493955805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58460,
            "unit": "ns",
            "range": "± 6019.6380749336995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44709.375,
            "unit": "ns",
            "range": "± 2588.276326458453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60102.15053763441,
            "unit": "ns",
            "range": "± 14803.15021184624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2386.59793814433,
            "unit": "ns",
            "range": "± 521.342191283586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10287.234042553191,
            "unit": "ns",
            "range": "± 1152.182038573523"
          }
        ]
      }
    ]
  }
}