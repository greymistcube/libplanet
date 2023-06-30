window.BENCHMARK_DATA = {
  "lastUpdate": 1688105487824,
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
          "id": "5df2998d3b17ea44161fc3a351c346408e26b893",
          "message": "Changelog",
          "timestamp": "2023-06-30T12:00:26+09:00",
          "tree_id": "f60c43e0317c439fc9293135883f8bff07a65377",
          "url": "https://github.com/greymistcube/libplanet/commit/5df2998d3b17ea44161fc3a351c346408e26b893"
        },
        "date": 1688094950129,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8053747.12,
            "unit": "ns",
            "range": "± 210520.28952936266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19856874.6,
            "unit": "ns",
            "range": "± 341065.6512285742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49482055.25,
            "unit": "ns",
            "range": "± 2444825.779141424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97636452.4,
            "unit": "ns",
            "range": "± 760144.7868685282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195686541.53333333,
            "unit": "ns",
            "range": "± 2093069.24147407"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55892.96808510638,
            "unit": "ns",
            "range": "± 6600.610671409852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321680.23595505615,
            "unit": "ns",
            "range": "± 24358.60574828762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312331.0888888889,
            "unit": "ns",
            "range": "± 23148.714707273735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297165.0625,
            "unit": "ns",
            "range": "± 19079.781059547386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4239313.076923077,
            "unit": "ns",
            "range": "± 215430.03796517287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3674272.5,
            "unit": "ns",
            "range": "± 63074.598984365024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17192.65263157895,
            "unit": "ns",
            "range": "± 1769.0053508237336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88561.32989690722,
            "unit": "ns",
            "range": "± 10918.2171628446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85909.78021978022,
            "unit": "ns",
            "range": "± 7048.469975505635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108707.32989690722,
            "unit": "ns",
            "range": "± 13839.968266553253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5054.68085106383,
            "unit": "ns",
            "range": "± 716.647210980214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16649.206521739132,
            "unit": "ns",
            "range": "± 1781.6280524620274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1575459.2268041237,
            "unit": "ns",
            "range": "± 199057.61071512612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2806064.671875,
            "unit": "ns",
            "range": "± 129499.42397641759"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2018708.7083333333,
            "unit": "ns",
            "range": "± 200369.85839139507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5720380.214285715,
            "unit": "ns",
            "range": "± 242800.7760116185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3176736.68,
            "unit": "ns",
            "range": "± 127098.68518233848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3402130.0172413792,
            "unit": "ns",
            "range": "± 145756.11688473143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4355674.269230769,
            "unit": "ns",
            "range": "± 144246.07504383128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3826331.4777777777,
            "unit": "ns",
            "range": "± 133626.41103353797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7669390.581632653,
            "unit": "ns",
            "range": "± 545371.826546512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6241704.294471154,
            "unit": "ns",
            "range": "± 33591.45716875573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1956659.0575420673,
            "unit": "ns",
            "range": "± 16095.229377495922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1297427.085546875,
            "unit": "ns",
            "range": "± 13684.745312939282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2529080.9890625,
            "unit": "ns",
            "range": "± 46061.311946847534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 865077.7940104167,
            "unit": "ns",
            "range": "± 7184.158798922895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 826041.9567057291,
            "unit": "ns",
            "range": "± 5298.349005915489"
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
          "id": "08910b0af94fe9e356b243c6ed37f07dc619cca2",
          "message": "Move KeyConverters",
          "timestamp": "2023-06-30T11:40:45+09:00",
          "tree_id": "597224e5572792ee3be3cb7d08fe6365a148d443",
          "url": "https://github.com/greymistcube/libplanet/commit/08910b0af94fe9e356b243c6ed37f07dc619cca2"
        },
        "date": 1688095024098,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8736219.92857143,
            "unit": "ns",
            "range": "± 77232.06569460669"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23572612.066666666,
            "unit": "ns",
            "range": "± 424811.33750078926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58630262.666666664,
            "unit": "ns",
            "range": "± 868584.7447019503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111717713.17857143,
            "unit": "ns",
            "range": "± 3184529.742071318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226531034.6470588,
            "unit": "ns",
            "range": "± 4499388.192760488"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68393.57608695653,
            "unit": "ns",
            "range": "± 8462.619491887654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 378343.8202247191,
            "unit": "ns",
            "range": "± 29555.583697409642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 361969.62637362635,
            "unit": "ns",
            "range": "± 25516.77988376727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 323482.4421052632,
            "unit": "ns",
            "range": "± 21583.27765405026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4748339.7,
            "unit": "ns",
            "range": "± 141692.10495372437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4575327.866666666,
            "unit": "ns",
            "range": "± 81133.2325770983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19890.178947368422,
            "unit": "ns",
            "range": "± 1864.5619871185274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99306.25773195876,
            "unit": "ns",
            "range": "± 8983.011458300922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99857.9191919192,
            "unit": "ns",
            "range": "± 12628.474425675256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111810.56701030929,
            "unit": "ns",
            "range": "± 16528.839913105425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5467.365979381443,
            "unit": "ns",
            "range": "± 583.882455152326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19042.255319148935,
            "unit": "ns",
            "range": "± 1682.816409629936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1796666.336734694,
            "unit": "ns",
            "range": "± 158130.51863245096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3418676.4,
            "unit": "ns",
            "range": "± 128242.59597064817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2385925.9239130435,
            "unit": "ns",
            "range": "± 228116.34959968663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6710562.744444445,
            "unit": "ns",
            "range": "± 557677.3289334119"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3739480.677777778,
            "unit": "ns",
            "range": "± 131262.67954049047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3947447.52,
            "unit": "ns",
            "range": "± 158395.93286979775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5000139.5,
            "unit": "ns",
            "range": "± 213035.62820506637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4315574.924242424,
            "unit": "ns",
            "range": "± 202165.58442874803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8113096.492063492,
            "unit": "ns",
            "range": "± 360078.56768237316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6822886.866753472,
            "unit": "ns",
            "range": "± 139493.23732632102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2207931.046440972,
            "unit": "ns",
            "range": "± 45550.73524882848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1456631.3049316406,
            "unit": "ns",
            "range": "± 28320.9970026996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2976333.5564903845,
            "unit": "ns",
            "range": "± 38433.99230975874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 906807.6715959822,
            "unit": "ns",
            "range": "± 10374.215841606985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 862284.346875,
            "unit": "ns",
            "range": "± 6228.641795659644"
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
          "id": "32a2560ed058199c038d2c9b6cd64e02d5a39d9d",
          "message": "Changelog",
          "timestamp": "2023-06-30T14:55:17+09:00",
          "tree_id": "3c96268fafe854264ee3312471a2c2e151e08e15",
          "url": "https://github.com/greymistcube/libplanet/commit/32a2560ed058199c038d2c9b6cd64e02d5a39d9d"
        },
        "date": 1688105474529,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8414717.61392405,
            "unit": "ns",
            "range": "± 381967.6573917391"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20918670.576086957,
            "unit": "ns",
            "range": "± 1169165.0506473847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51795638.98529412,
            "unit": "ns",
            "range": "± 2475851.1191277504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104098282.84523809,
            "unit": "ns",
            "range": "± 5573648.680318305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219315050.8617021,
            "unit": "ns",
            "range": "± 8552180.913797071"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62075.166666666664,
            "unit": "ns",
            "range": "± 11957.43269425679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331745.9555555555,
            "unit": "ns",
            "range": "± 24660.92125053257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328633.93548387097,
            "unit": "ns",
            "range": "± 40528.32022334786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306800.2840909091,
            "unit": "ns",
            "range": "± 22931.979649443758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4323930.211111112,
            "unit": "ns",
            "range": "± 162806.69377594878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3928400.6894736844,
            "unit": "ns",
            "range": "± 229418.0254576782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17752.395604395606,
            "unit": "ns",
            "range": "± 2419.944654459505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97125.44210526315,
            "unit": "ns",
            "range": "± 17075.666694386575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111941.27777777778,
            "unit": "ns",
            "range": "± 15922.017968751743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109537.54736842106,
            "unit": "ns",
            "range": "± 15387.319760783705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7770.091836734694,
            "unit": "ns",
            "range": "± 1487.6532067804023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16451.379120879123,
            "unit": "ns",
            "range": "± 2267.861806661679"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1751985.9583333333,
            "unit": "ns",
            "range": "± 260100.9727507222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3458613.767676768,
            "unit": "ns",
            "range": "± 430605.65829973895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2444913.8969072164,
            "unit": "ns",
            "range": "± 358712.8623142426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6774426.590909091,
            "unit": "ns",
            "range": "± 628480.2263886529"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3747242.8829787234,
            "unit": "ns",
            "range": "± 552013.8016942149"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3591491.1690140846,
            "unit": "ns",
            "range": "± 176172.33971386295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4528658.55952381,
            "unit": "ns",
            "range": "± 237155.08347057665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4198745.0051546395,
            "unit": "ns",
            "range": "± 388706.36750391155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7764655.854166667,
            "unit": "ns",
            "range": "± 562813.4808831146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6283561.204241072,
            "unit": "ns",
            "range": "± 68810.1423376105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1870263.5580729167,
            "unit": "ns",
            "range": "± 31993.381536206634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1235154.5466145833,
            "unit": "ns",
            "range": "± 14305.463518783257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2662791.6825520834,
            "unit": "ns",
            "range": "± 20795.064938202333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 875161.8225911459,
            "unit": "ns",
            "range": "± 5235.700665676594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 718268.2338169643,
            "unit": "ns",
            "range": "± 3540.794998932355"
          }
        ]
      }
    ]
  }
}