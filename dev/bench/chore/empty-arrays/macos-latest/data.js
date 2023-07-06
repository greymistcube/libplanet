window.BENCHMARK_DATA = {
  "lastUpdate": 1688628632208,
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
          "id": "e24d18921c41a38b868ee475266278ff81d69ecb",
          "message": "[skip changelog] Use Array.Empty",
          "timestamp": "2023-07-06T16:10:56+09:00",
          "tree_id": "325d5ec55c6a1ae00ba89f4065e854776ab1151d",
          "url": "https://github.com/greymistcube/libplanet/commit/e24d18921c41a38b868ee475266278ff81d69ecb"
        },
        "date": 1688628612033,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8340181.018518519,
            "unit": "ns",
            "range": "± 227895.1677429053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20591143.315789472,
            "unit": "ns",
            "range": "± 701636.6951104918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57370994.73913044,
            "unit": "ns",
            "range": "± 7326973.509348587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107369918.08490565,
            "unit": "ns",
            "range": "± 4305919.204466288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219396013.425,
            "unit": "ns",
            "range": "± 7788476.9126947895"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71457.31868131868,
            "unit": "ns",
            "range": "± 8021.270482465316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 359999.1105263158,
            "unit": "ns",
            "range": "± 46606.32079297115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 356111.6808510638,
            "unit": "ns",
            "range": "± 45617.16710195627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 348274.05102040817,
            "unit": "ns",
            "range": "± 57503.74945271901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4513426.921052632,
            "unit": "ns",
            "range": "± 322394.5206058109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4188543.319587629,
            "unit": "ns",
            "range": "± 355229.79985240265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22673.945652173912,
            "unit": "ns",
            "range": "± 3934.4219268035754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105209.39130434782,
            "unit": "ns",
            "range": "± 24684.002971385176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110561.2032967033,
            "unit": "ns",
            "range": "± 13016.98094157056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116375.67391304347,
            "unit": "ns",
            "range": "± 17665.797937897078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8448.777777777777,
            "unit": "ns",
            "range": "± 1360.395968692739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21083.279069767443,
            "unit": "ns",
            "range": "± 2665.059325688478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1686135.4646464647,
            "unit": "ns",
            "range": "± 179296.9769040883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3056109.6704545454,
            "unit": "ns",
            "range": "± 166339.15629117598"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2210481.494845361,
            "unit": "ns",
            "range": "± 216678.63949330404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6232988.4375,
            "unit": "ns",
            "range": "± 280734.13625004626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3396717.788888889,
            "unit": "ns",
            "range": "± 316943.9148091511"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3984381.988505747,
            "unit": "ns",
            "range": "± 935139.1523901855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4511838.818181818,
            "unit": "ns",
            "range": "± 184182.51053698632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4093622.723404255,
            "unit": "ns",
            "range": "± 309002.5840441125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7571360.340659341,
            "unit": "ns",
            "range": "± 680024.7409961269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7156175.740192819,
            "unit": "ns",
            "range": "± 234076.54282006703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2203360.1499683275,
            "unit": "ns",
            "range": "± 74331.37658821874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1468488.3251302084,
            "unit": "ns",
            "range": "± 25410.76513285651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3230166.269071691,
            "unit": "ns",
            "range": "± 64347.624073739986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 975820.3193359375,
            "unit": "ns",
            "range": "± 20461.86399076014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 932306.7517578125,
            "unit": "ns",
            "range": "± 20955.637148551505"
          }
        ]
      }
    ]
  }
}