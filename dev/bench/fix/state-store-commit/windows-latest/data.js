window.BENCHMARK_DATA = {
  "lastUpdate": 1705548019540,
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
          "id": "b87a01ffd3acdc0d26e174a4b87d1bb88684d92f",
          "message": "Fixed Commit()",
          "timestamp": "2024-01-18T12:08:49+09:00",
          "tree_id": "955624126e980538bd20b8681af8b62bbb718d63",
          "url": "https://github.com/greymistcube/libplanet/commit/b87a01ffd3acdc0d26e174a4b87d1bb88684d92f"
        },
        "date": 1705548002713,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 952016.1616161616,
            "unit": "ns",
            "range": "± 126013.4125571566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1710509.589041096,
            "unit": "ns",
            "range": "± 67663.96990599856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1362709.574468085,
            "unit": "ns",
            "range": "± 98370.22789086567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5288430.555555556,
            "unit": "ns",
            "range": "± 175505.02120524633"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35798.88888888889,
            "unit": "ns",
            "range": "± 2400.725285747614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5109186.666666667,
            "unit": "ns",
            "range": "± 43631.31029542017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13419807.142857144,
            "unit": "ns",
            "range": "± 169418.63812773064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32540926.923076924,
            "unit": "ns",
            "range": "± 233460.48971166462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65252470.5882353,
            "unit": "ns",
            "range": "± 1101096.5964464163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135922480,
            "unit": "ns",
            "range": "± 2122506.7666727067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3377651.7447916665,
            "unit": "ns",
            "range": "± 20430.447678206903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1064984.095982143,
            "unit": "ns",
            "range": "± 2002.1643045193453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741103.88671875,
            "unit": "ns",
            "range": "± 1082.8723018554313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948819.7526041667,
            "unit": "ns",
            "range": "± 6358.413490933392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628829.2252604166,
            "unit": "ns",
            "range": "± 2171.1163226515314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556356.9475446428,
            "unit": "ns",
            "range": "± 2433.8728955938222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2197368.75,
            "unit": "ns",
            "range": "± 38995.05470783015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2389196.4285714286,
            "unit": "ns",
            "range": "± 67076.06230929657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2866084.375,
            "unit": "ns",
            "range": "± 126132.05126041014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2709675.757575758,
            "unit": "ns",
            "range": "± 84645.1786514707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6406317.1875,
            "unit": "ns",
            "range": "± 295182.0977142955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170811.53846153847,
            "unit": "ns",
            "range": "± 7015.966492367328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159054.66666666666,
            "unit": "ns",
            "range": "± 8044.979857084845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138141.30434782608,
            "unit": "ns",
            "range": "± 4588.951760573385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2739323.3333333335,
            "unit": "ns",
            "range": "± 81321.68427506488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2368914.285714286,
            "unit": "ns",
            "range": "± 31203.694483995794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10709.375,
            "unit": "ns",
            "range": "± 1742.7792761170756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57077.083333333336,
            "unit": "ns",
            "range": "± 8305.273900444434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43613.51351351351,
            "unit": "ns",
            "range": "± 1339.3950048357574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 45085.18518518518,
            "unit": "ns",
            "range": "± 5498.95697180636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2157.8947368421054,
            "unit": "ns",
            "range": "± 277.365626798728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10932.978723404256,
            "unit": "ns",
            "range": "± 1953.2376374521468"
          }
        ]
      }
    ]
  }
}