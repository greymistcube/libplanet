window.BENCHMARK_DATA = {
  "lastUpdate": 1701670613935,
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
          "id": "4b0b11cf5148ac89930386f63f1a7fdc40d6fdf8",
          "message": "Revert \"Introduce ITxContext\"\n\nThis reverts commit c871f59f57582d9c91d4f04cd2a036b51420a91f.",
          "timestamp": "2023-12-04T15:00:12+09:00",
          "tree_id": "adb8379e52873b1928cb552efae42b018cda5b83",
          "url": "https://github.com/greymistcube/libplanet/commit/4b0b11cf5148ac89930386f63f1a7fdc40d6fdf8"
        },
        "date": 1701670594659,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8484918.75,
            "unit": "ns",
            "range": "± 753790.3183449819"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21203379.42857143,
            "unit": "ns",
            "range": "± 352178.93271672924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50470006.10526316,
            "unit": "ns",
            "range": "± 1530931.9554051151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99421821.59375,
            "unit": "ns",
            "range": "± 3008839.0700215944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202847618.92857143,
            "unit": "ns",
            "range": "± 2932825.2491605775"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44509.729166666664,
            "unit": "ns",
            "range": "± 13876.488616572895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271042.26666666666,
            "unit": "ns",
            "range": "± 34420.79658630745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231598.82258064515,
            "unit": "ns",
            "range": "± 25510.144273006244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258008.91397849462,
            "unit": "ns",
            "range": "± 35973.49756679454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4015468.7842105264,
            "unit": "ns",
            "range": "± 282224.04387274745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3617955.723880597,
            "unit": "ns",
            "range": "± 171159.85420084692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17170.728260869564,
            "unit": "ns",
            "range": "± 4143.084546893659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84001.85858585859,
            "unit": "ns",
            "range": "± 23877.40098366864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98528.41489361702,
            "unit": "ns",
            "range": "± 12832.710988744193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83359.0306122449,
            "unit": "ns",
            "range": "± 20425.40462643745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6720.766666666666,
            "unit": "ns",
            "range": "± 1526.2374021970397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17528.40361445783,
            "unit": "ns",
            "range": "± 4537.201846992552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1062620.7142857143,
            "unit": "ns",
            "range": "± 88332.82657860541"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2228456.755319149,
            "unit": "ns",
            "range": "± 138258.28379387493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1473607.4516129033,
            "unit": "ns",
            "range": "± 100961.93128056993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6663113.447058824,
            "unit": "ns",
            "range": "± 484104.90052891156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3015197.388888889,
            "unit": "ns",
            "range": "± 168039.17137580537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3192919.3469387754,
            "unit": "ns",
            "range": "± 207157.3855081175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3794571.955882353,
            "unit": "ns",
            "range": "± 181365.9684581405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3689330.787234043,
            "unit": "ns",
            "range": "± 275113.57921355095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13903900.510204082,
            "unit": "ns",
            "range": "± 2214141.9514672174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4844648.4401578605,
            "unit": "ns",
            "range": "± 342995.3406050888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1403943.728515625,
            "unit": "ns",
            "range": "± 43770.61807914459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 945804.0710784313,
            "unit": "ns",
            "range": "± 35522.07746533526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2115334.19125,
            "unit": "ns",
            "range": "± 80434.98043253466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 658556.1726074219,
            "unit": "ns",
            "range": "± 12855.404780095632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 595119.9997173109,
            "unit": "ns",
            "range": "± 13157.143488106352"
          }
        ]
      }
    ]
  }
}