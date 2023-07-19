window.BENCHMARK_DATA = {
  "lastUpdate": 1689784559223,
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
          "id": "032a859e1d95812aacd99ccb608d965bfce3d5b2",
          "message": "Use KeyBytes instead of strings",
          "timestamp": "2023-07-20T00:50:49+09:00",
          "tree_id": "0074298ada438a2572c19c5e026f603c1ccc74bc",
          "url": "https://github.com/greymistcube/libplanet/commit/032a859e1d95812aacd99ccb608d965bfce3d5b2"
        },
        "date": 1689784546291,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9303946.5,
            "unit": "ns",
            "range": "± 664543.939231616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22768568.64285714,
            "unit": "ns",
            "range": "± 1097881.815395793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56005225.948979594,
            "unit": "ns",
            "range": "± 2233098.5700670965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104206151,
            "unit": "ns",
            "range": "± 3541057.413455324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216177113.83333334,
            "unit": "ns",
            "range": "± 1485574.6746752942"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68099.2947368421,
            "unit": "ns",
            "range": "± 11552.380914103658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311641.52173913043,
            "unit": "ns",
            "range": "± 22013.952784729812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299490.8404255319,
            "unit": "ns",
            "range": "± 20604.305400019504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309990.3253012048,
            "unit": "ns",
            "range": "± 21277.451597079464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4368301.006666667,
            "unit": "ns",
            "range": "± 219441.89112661764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3853235.407407407,
            "unit": "ns",
            "range": "± 154672.48507679344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21441.335051546394,
            "unit": "ns",
            "range": "± 4102.122546825638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88636.45161290323,
            "unit": "ns",
            "range": "± 11326.632537592759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106096.57291666667,
            "unit": "ns",
            "range": "± 10867.539643354896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115121.74731182796,
            "unit": "ns",
            "range": "± 11069.770850752606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6739.552083333333,
            "unit": "ns",
            "range": "± 1071.684594898603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22448.211764705884,
            "unit": "ns",
            "range": "± 3570.9942029467074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1566933.4444444445,
            "unit": "ns",
            "range": "± 158752.55723617476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2813982.7333333334,
            "unit": "ns",
            "range": "± 123932.13811207074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2095297.2234042552,
            "unit": "ns",
            "range": "± 189228.9582011727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5796869.830769231,
            "unit": "ns",
            "range": "± 269860.9103529405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3399817.159574468,
            "unit": "ns",
            "range": "± 199629.06401217607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3826806.4278350514,
            "unit": "ns",
            "range": "± 441013.9447184288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4657690.236263736,
            "unit": "ns",
            "range": "± 425234.90502011124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4130388.0104166665,
            "unit": "ns",
            "range": "± 290607.517707139"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7751929.4845360825,
            "unit": "ns",
            "range": "± 533329.8344516958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6407306.070772059,
            "unit": "ns",
            "range": "± 115487.6386286233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2169332.017708333,
            "unit": "ns",
            "range": "± 38021.927060439564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359468.337890625,
            "unit": "ns",
            "range": "± 20187.658925408094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2954061.213623047,
            "unit": "ns",
            "range": "± 57361.0560135969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 882309.2051478794,
            "unit": "ns",
            "range": "± 8458.391790917356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 805117.3481001421,
            "unit": "ns",
            "range": "± 19212.070882558564"
          }
        ]
      }
    ]
  }
}