window.BENCHMARK_DATA = {
  "lastUpdate": 1689325220135,
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
          "id": "589bc3f9aa3318991231573683e452f6d1fc70dc",
          "message": "Merge tag '2.4.1' into merge/2.4.1-to-main\n\nLibplanet 2.4.1",
          "timestamp": "2023-07-14T17:43:32+09:00",
          "tree_id": "cede7080b7cb7a22e5c7e49ead453919777f42df",
          "url": "https://github.com/greymistcube/libplanet/commit/589bc3f9aa3318991231573683e452f6d1fc70dc"
        },
        "date": 1689325196131,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1467197.9797979798,
            "unit": "ns",
            "range": "± 152275.13296111784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2643713.888888889,
            "unit": "ns",
            "range": "± 127971.76989042891"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1870086.7346938776,
            "unit": "ns",
            "range": "± 136583.15969745023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5088786.8852459015,
            "unit": "ns",
            "range": "± 228398.1935680241"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50000.52631578947,
            "unit": "ns",
            "range": "± 4064.0320007381238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7787312.068965517,
            "unit": "ns",
            "range": "± 336353.4539619528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20927356.666666668,
            "unit": "ns",
            "range": "± 295129.7958203346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52061907.14285714,
            "unit": "ns",
            "range": "± 685507.8089262741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104736064.28571428,
            "unit": "ns",
            "range": "± 1285593.3024855116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207050100,
            "unit": "ns",
            "range": "± 1919924.6178110542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4943406.082589285,
            "unit": "ns",
            "range": "± 20178.059930076168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1584842.1875,
            "unit": "ns",
            "range": "± 4636.35223603893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1213215.4296875,
            "unit": "ns",
            "range": "± 4765.5065820131485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2713338.4765625,
            "unit": "ns",
            "range": "± 7386.680442858856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 866400.4045758928,
            "unit": "ns",
            "range": "± 3820.912355783114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 794752.6106770834,
            "unit": "ns",
            "range": "± 3237.615997851053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3328500,
            "unit": "ns",
            "range": "± 87678.05217574882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3536709.523809524,
            "unit": "ns",
            "range": "± 123248.05605655178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4236085.714285715,
            "unit": "ns",
            "range": "± 73889.73965560866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3915095.8333333335,
            "unit": "ns",
            "range": "± 152425.71676461186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6520795.454545454,
            "unit": "ns",
            "range": "± 157145.01788164218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275939.1304347826,
            "unit": "ns",
            "range": "± 10611.738327821895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265010.6382978723,
            "unit": "ns",
            "range": "± 10257.896937663138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246621.21212121213,
            "unit": "ns",
            "range": "± 17965.74559661526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4284255.555555556,
            "unit": "ns",
            "range": "± 118542.71976910438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3862411.7647058824,
            "unit": "ns",
            "range": "± 78710.05242623827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23034.375,
            "unit": "ns",
            "range": "± 2484.7674094263566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97184.375,
            "unit": "ns",
            "range": "± 7784.2665628209725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82964.21052631579,
            "unit": "ns",
            "range": "± 8566.397934501318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108805.15463917526,
            "unit": "ns",
            "range": "± 19736.468841198206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6052.105263157895,
            "unit": "ns",
            "range": "± 1031.9346576881512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22064.21052631579,
            "unit": "ns",
            "range": "± 2448.7910951217527"
          }
        ]
      }
    ]
  }
}