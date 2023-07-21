window.BENCHMARK_DATA = {
  "lastUpdate": 1689914412980,
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
          "id": "94ceefc81e5c28a3cba877c38447820481d4f9d3",
          "message": "Removed more string usage",
          "timestamp": "2023-07-21T13:17:38+09:00",
          "tree_id": "88db91efeeaac436e3e33d1df6fc60791a1ed43f",
          "url": "https://github.com/greymistcube/libplanet/commit/94ceefc81e5c28a3cba877c38447820481d4f9d3"
        },
        "date": 1689914378500,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1777731.5789473683,
            "unit": "ns",
            "range": "± 183736.2073348045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3519188.144329897,
            "unit": "ns",
            "range": "± 364711.5713830413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2366451.6129032257,
            "unit": "ns",
            "range": "± 273972.14576481853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6555813.186813187,
            "unit": "ns",
            "range": "± 430116.13553364633"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70054.08163265306,
            "unit": "ns",
            "range": "± 16601.87648298089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8987993.617021276,
            "unit": "ns",
            "range": "± 886556.0326897587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25001090.52631579,
            "unit": "ns",
            "range": "± 1986610.3606701693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66623636,
            "unit": "ns",
            "range": "± 4799413.006059315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130421845.23809524,
            "unit": "ns",
            "range": "± 4762834.628149367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 276223991.6666667,
            "unit": "ns",
            "range": "± 9123864.687115088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5896596.5234375,
            "unit": "ns",
            "range": "± 115911.5872373184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2050906.0609879033,
            "unit": "ns",
            "range": "± 60954.88055804498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1475368.2896205357,
            "unit": "ns",
            "range": "± 22940.884269219183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3205643.0245535714,
            "unit": "ns",
            "range": "± 49414.84190411691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1075731.290952621,
            "unit": "ns",
            "range": "± 32693.819442679884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 982874.8347355769,
            "unit": "ns",
            "range": "± 23985.55789701481"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3859107.3684210526,
            "unit": "ns",
            "range": "± 330172.457271762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4037542.3913043477,
            "unit": "ns",
            "range": "± 372420.81988568883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5116662.222222222,
            "unit": "ns",
            "range": "± 440642.6057163951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4477927.173913044,
            "unit": "ns",
            "range": "± 423507.76115551696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8075278.865979382,
            "unit": "ns",
            "range": "± 722175.2238548081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327755.91397849465,
            "unit": "ns",
            "range": "± 46680.34094722361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316979.38144329895,
            "unit": "ns",
            "range": "± 49073.688083466914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283889.79591836734,
            "unit": "ns",
            "range": "± 47763.572561895395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4875167.708333333,
            "unit": "ns",
            "range": "± 455584.2764475877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4285959.375,
            "unit": "ns",
            "range": "± 448773.0289245685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29361.224489795917,
            "unit": "ns",
            "range": "± 11016.722365615082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106241.83673469388,
            "unit": "ns",
            "range": "± 19821.230279362142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117631.57894736843,
            "unit": "ns",
            "range": "± 21685.09274779343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 142989.58333333334,
            "unit": "ns",
            "range": "± 31174.485110901587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7400,
            "unit": "ns",
            "range": "± 1859.5382095943005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28557,
            "unit": "ns",
            "range": "± 11130.495510220122"
          }
        ]
      }
    ]
  }
}