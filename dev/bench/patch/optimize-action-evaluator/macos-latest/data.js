window.BENCHMARK_DATA = {
  "lastUpdate": 1708357512105,
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
          "id": "8119060772bfbcabc90d5894cc8190757b2ccb88",
          "message": "Remove clutter",
          "timestamp": "2024-02-19T20:50:19+09:00",
          "tree_id": "20b1db2437046912a63df1dbe166807fc824a10f",
          "url": "https://github.com/greymistcube/libplanet/commit/8119060772bfbcabc90d5894cc8190757b2ccb88"
        },
        "date": 1708351862765,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7786516.68,
            "unit": "ns",
            "range": "± 184189.61674809468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19973635.56451613,
            "unit": "ns",
            "range": "± 595092.887185686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48170325.375,
            "unit": "ns",
            "range": "± 910655.9644723412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95797391,
            "unit": "ns",
            "range": "± 1338931.1767793244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195546575.1875,
            "unit": "ns",
            "range": "± 3635341.5041103303"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42536.416666666664,
            "unit": "ns",
            "range": "± 10795.244936317458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 223793.63684210528,
            "unit": "ns",
            "range": "± 13411.629917137832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212401.0588235294,
            "unit": "ns",
            "range": "± 8543.571956533788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210344.88775510204,
            "unit": "ns",
            "range": "± 25445.06504343408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3985852.4242424243,
            "unit": "ns",
            "range": "± 99370.05259792507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3412631.785714286,
            "unit": "ns",
            "range": "± 50797.82753596483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14586.59090909091,
            "unit": "ns",
            "range": "± 2898.3027638914427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64047.34782608696,
            "unit": "ns",
            "range": "± 9825.283109680853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61628.762886597935,
            "unit": "ns",
            "range": "± 12783.919368987546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69942.67346938775,
            "unit": "ns",
            "range": "± 14168.458615774609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4629.41052631579,
            "unit": "ns",
            "range": "± 1603.2212752252344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14215.994845360825,
            "unit": "ns",
            "range": "± 4209.935201212799"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1121794.5154639175,
            "unit": "ns",
            "range": "± 97978.96754343434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2373650.5721649486,
            "unit": "ns",
            "range": "± 183416.65622703178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1774230.8333333333,
            "unit": "ns",
            "range": "± 129328.20277895725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19612830.386363637,
            "unit": "ns",
            "range": "± 2074855.9603340114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2945974.4925373136,
            "unit": "ns",
            "range": "± 139458.0854952889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3046861.238095238,
            "unit": "ns",
            "range": "± 108024.06669040085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3688416.8076923075,
            "unit": "ns",
            "range": "± 210731.39801503462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3710219.3604651163,
            "unit": "ns",
            "range": "± 201470.00194890573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22430838.8172043,
            "unit": "ns",
            "range": "± 2700981.7520892643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4439163.217548077,
            "unit": "ns",
            "range": "± 63551.61379407679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1371870.3302408855,
            "unit": "ns",
            "range": "± 18234.863732055852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 892574.111328125,
            "unit": "ns",
            "range": "± 9168.814465491796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2106107.338641827,
            "unit": "ns",
            "range": "± 16323.706128165602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 645644.0009014423,
            "unit": "ns",
            "range": "± 5431.406096376937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569716.4025691106,
            "unit": "ns",
            "range": "± 5896.287677983954"
          }
        ]
      },
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
          "id": "78fbe3fda20683193ef2dced22c81d4c39117831",
          "message": "Optimized action evaluator",
          "timestamp": "2024-02-19T23:28:50+09:00",
          "tree_id": "794c843bea0f3e5257fa40280443f9ed020c53bd",
          "url": "https://github.com/greymistcube/libplanet/commit/78fbe3fda20683193ef2dced22c81d4c39117831"
        },
        "date": 1708353863896,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8333077.598901099,
            "unit": "ns",
            "range": "± 765919.9098478038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21627054.586206898,
            "unit": "ns",
            "range": "± 1177339.4348562825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50435115.85858586,
            "unit": "ns",
            "range": "± 2947609.155854363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104927913.7413793,
            "unit": "ns",
            "range": "± 3073956.521018087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211122482.8263158,
            "unit": "ns",
            "range": "± 12728918.52977371"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51923.77272727273,
            "unit": "ns",
            "range": "± 11565.98639663145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 246989.8956043956,
            "unit": "ns",
            "range": "± 33120.34991222805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251775.6894736842,
            "unit": "ns",
            "range": "± 39189.766361840346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 263525.37096774194,
            "unit": "ns",
            "range": "± 37722.04442400555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4538341.353932585,
            "unit": "ns",
            "range": "± 518403.0416647481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3747398.8333333335,
            "unit": "ns",
            "range": "± 222364.0931743396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16078.181318681318,
            "unit": "ns",
            "range": "± 2550.521989620168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84354.11458333333,
            "unit": "ns",
            "range": "± 16789.271842377766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86552.73958333333,
            "unit": "ns",
            "range": "± 17248.45020573995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90621.68478260869,
            "unit": "ns",
            "range": "± 20487.690185604242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6149.311827956989,
            "unit": "ns",
            "range": "± 1240.4984007007777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15777.810526315789,
            "unit": "ns",
            "range": "± 3258.333362954647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1201786.1195652173,
            "unit": "ns",
            "range": "± 179363.5757834369"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2469006.5,
            "unit": "ns",
            "range": "± 236155.40856577194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1940124.581632653,
            "unit": "ns",
            "range": "± 223497.13091499748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 20759146.277777776,
            "unit": "ns",
            "range": "± 2578876.0780646713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3051906.2526881723,
            "unit": "ns",
            "range": "± 201344.169974852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3058988.7916666665,
            "unit": "ns",
            "range": "± 134140.88847844632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3758223.09375,
            "unit": "ns",
            "range": "± 173057.92902091178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3824584.287671233,
            "unit": "ns",
            "range": "± 186200.79350629638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24380957.989361703,
            "unit": "ns",
            "range": "± 3439797.318829447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4620636.791145833,
            "unit": "ns",
            "range": "± 49978.51067500079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1385573.7640904018,
            "unit": "ns",
            "range": "± 2888.582403212262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 897700.7504557292,
            "unit": "ns",
            "range": "± 4231.7115097199085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2262818.300592238,
            "unit": "ns",
            "range": "± 123625.24328910826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 681742.8314732143,
            "unit": "ns",
            "range": "± 10811.033365361456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 611876.0555889423,
            "unit": "ns",
            "range": "± 10165.679297466659"
          }
        ]
      },
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
          "id": "7aa8853a05ca98a88391517b3fc1d0409ea3c9cc",
          "message": "Optimized action evaluator",
          "timestamp": "2024-02-20T00:25:14+09:00",
          "tree_id": "9a15a671f07b8f532de30902b1889237f2953701",
          "url": "https://github.com/greymistcube/libplanet/commit/7aa8853a05ca98a88391517b3fc1d0409ea3c9cc"
        },
        "date": 1708357496265,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8322840.461538462,
            "unit": "ns",
            "range": "± 123660.04536808119"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23071800.454545453,
            "unit": "ns",
            "range": "± 714894.8189073905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52038314.333333336,
            "unit": "ns",
            "range": "± 535313.3840583193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108040167.26315789,
            "unit": "ns",
            "range": "± 3723413.873078769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215327691.78947368,
            "unit": "ns",
            "range": "± 6909382.348957989"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72082.55172413793,
            "unit": "ns",
            "range": "± 8779.52108636994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317568.20652173914,
            "unit": "ns",
            "range": "± 18094.912956158318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292868.4673913043,
            "unit": "ns",
            "range": "± 19276.996320816455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305504.06976744183,
            "unit": "ns",
            "range": "± 20240.562389182014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4298790.956521739,
            "unit": "ns",
            "range": "± 94281.03106596608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3811798.3571428573,
            "unit": "ns",
            "range": "± 109129.8012654568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19418.342105263157,
            "unit": "ns",
            "range": "± 2868.1679834324577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101324.58421052631,
            "unit": "ns",
            "range": "± 12439.866203582975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83772.36458333333,
            "unit": "ns",
            "range": "± 13679.172859050546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99154.32631578947,
            "unit": "ns",
            "range": "± 15954.208507970225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7137.677083333333,
            "unit": "ns",
            "range": "± 1080.681651305924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18588.308510638297,
            "unit": "ns",
            "range": "± 3162.7259510479507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1430753.7659574468,
            "unit": "ns",
            "range": "± 123367.9330701612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2807850.4298245613,
            "unit": "ns",
            "range": "± 121300.03084940423"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2790428.051020408,
            "unit": "ns",
            "range": "± 346678.9012415434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12140362.103448275,
            "unit": "ns",
            "range": "± 347476.63042481255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3310658.5945945946,
            "unit": "ns",
            "range": "± 164042.93285885904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3443094.6391752576,
            "unit": "ns",
            "range": "± 212768.2120107067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4477607.638297873,
            "unit": "ns",
            "range": "± 256902.29102272054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4676687.875,
            "unit": "ns",
            "range": "± 395362.20494963456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24110606.295918368,
            "unit": "ns",
            "range": "± 3916531.250726991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6931467.477035984,
            "unit": "ns",
            "range": "± 690887.1711850296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1792215.4691642993,
            "unit": "ns",
            "range": "± 54570.15469307953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1124655.4899739583,
            "unit": "ns",
            "range": "± 16654.44277382098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2857893.97214227,
            "unit": "ns",
            "range": "± 62979.392295387865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844516.8681640625,
            "unit": "ns",
            "range": "± 17222.588991108885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 825719.9127854567,
            "unit": "ns",
            "range": "± 10849.385061711071"
          }
        ]
      }
    ]
  }
}