window.BENCHMARK_DATA = {
  "lastUpdate": 1702893768203,
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
          "id": "20a83c7e16aa91de2331c52fadddcf7473abc4e5",
          "message": "Removed updated addresses from IRichStore",
          "timestamp": "2023-12-18T18:50:02+09:00",
          "tree_id": "4c182bfa4a5a7e0262c2321d7e3df1f7ed1be87e",
          "url": "https://github.com/greymistcube/libplanet/commit/20a83c7e16aa91de2331c52fadddcf7473abc4e5"
        },
        "date": 1702893742933,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 952655.4347826086,
            "unit": "ns",
            "range": "± 97222.3263420976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1725469.512195122,
            "unit": "ns",
            "range": "± 91244.2410684322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1327548.9795918367,
            "unit": "ns",
            "range": "± 135694.10963892503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5162639.393939394,
            "unit": "ns",
            "range": "± 157908.22085034466"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34163.2183908046,
            "unit": "ns",
            "range": "± 2144.8757183342127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5014100,
            "unit": "ns",
            "range": "± 19518.275459760192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13381626.666666666,
            "unit": "ns",
            "range": "± 132664.45032845982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32160607.14285714,
            "unit": "ns",
            "range": "± 323332.40508155717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63971233.333333336,
            "unit": "ns",
            "range": "± 626177.4128639202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129656264.28571428,
            "unit": "ns",
            "range": "± 923272.9878886499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3313465.4947916665,
            "unit": "ns",
            "range": "± 6399.347860739238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1065719.810267857,
            "unit": "ns",
            "range": "± 2845.3375375966757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733849.3791852678,
            "unit": "ns",
            "range": "± 1664.8532186984432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942945.9765625,
            "unit": "ns",
            "range": "± 5766.351987462463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 659626.6741071428,
            "unit": "ns",
            "range": "± 2168.7431120063193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558121.2890625,
            "unit": "ns",
            "range": "± 750.4751943451861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2068545.945945946,
            "unit": "ns",
            "range": "± 34798.52004032638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2266330,
            "unit": "ns",
            "range": "± 75009.9043032968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2826674.074074074,
            "unit": "ns",
            "range": "± 78992.3296792046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2626703.7735849055,
            "unit": "ns",
            "range": "± 108721.95476087002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6264525.396825396,
            "unit": "ns",
            "range": "± 285283.492827892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173960.65573770492,
            "unit": "ns",
            "range": "± 7606.253538778132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162389.33333333334,
            "unit": "ns",
            "range": "± 8178.4418877749395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139205,
            "unit": "ns",
            "range": "± 3852.6680731736133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2784271.4285714286,
            "unit": "ns",
            "range": "± 41846.09950707526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2505858.8235294116,
            "unit": "ns",
            "range": "± 49967.527690785464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11589.130434782608,
            "unit": "ns",
            "range": "± 1390.82207659135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51801.07526881721,
            "unit": "ns",
            "range": "± 3735.478975855122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43836.95652173913,
            "unit": "ns",
            "range": "± 1609.7423804450718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61775.510204081635,
            "unit": "ns",
            "range": "± 13297.957840461779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2652.577319587629,
            "unit": "ns",
            "range": "± 574.2917347164018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11029.545454545454,
            "unit": "ns",
            "range": "± 979.8145603239316"
          }
        ]
      }
    ]
  }
}